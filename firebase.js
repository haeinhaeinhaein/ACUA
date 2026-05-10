/**
 * ACUA — Firebase (Firestore + Storage), CDN compat SDK 전제.
 * Firebase 콘솔 → 프로젝트 설정 → 일반 → 웹 앱에서 복사한 값으로 firebaseConfig 를 채우세요.
 *
 * Firestore 컬렉션: global_reports
 * Storage 경로: global_reports/{reportId}.jpg (또는 .png)
 *
 * 배포 전 보안 규칙을 반드시 설정하세요. (개발용 예시는 README 등에서 안내)
 */
(function () {
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  const placeholderKeys = new Set(["YOUR_API_KEY", "YOUR_PROJECT_ID", "YOUR_SENDER_ID", "YOUR_APP_ID"]);
  const isConfigured =
    typeof firebase !== "undefined" &&
    firebaseConfig.apiKey &&
    !placeholderKeys.has(firebaseConfig.apiKey) &&
    !placeholderKeys.has(firebaseConfig.projectId);

  /** @type {{ ready: boolean, saveReport: (report: object) => Promise<void>, fetchGlobalArchive: (limit?: number) => Promise<object[]> }} */
  const api = {
    ready: false,
    saveReport: async function noopSave() {},
    fetchGlobalArchive: async function noopFetch() {
      return [];
    }
  };

  window.ACUA_FIREBASE = api;

  if (!isConfigured) {
    if (typeof console !== "undefined" && console.info) {
      console.info("[ACUA] Firebase가 비활성입니다. firebase.js의 firebaseConfig를 채운 뒤 CDN 스크립트 순서를 확인하세요.");
    }
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  const storage = firebase.storage();

  /**
   * @param {{ id: string, imageSrc: string, score: number, professionalComment: string, analysis: string, comparison: string, value: string, metricValues?: number[] }} report
   */
  async function saveReport(report) {
    const id = report.id;
    if (!id || !report.imageSrc) {
      throw new Error("report.id 또는 imageSrc가 없습니다.");
    }

    const imageResponse = await fetch(report.imageSrc);
    const blob = await imageResponse.blob();
    const isPng = (blob.type || "").includes("png");
    const ext = isPng ? "png" : "jpg";
    const contentType = blob.type || (isPng ? "image/png" : "image/jpeg");

    const fileRef = storage.ref().child(`global_reports/${id}.${ext}`);
    await fileRef.put(blob, { contentType });
    const imageUrl = await fileRef.getDownloadURL();

    await db.collection("global_reports").doc(id).set({
      imageUrl,
      score: report.score,
      professionalComment: report.professionalComment,
      analysis: report.analysis,
      comparison: report.comparison,
      value: report.value,
      metricValues: Array.isArray(report.metricValues) ? report.metricValues : [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  /**
   * @param {number} [limit]
   * @returns {Promise<Array<{ id: string, imageUrl?: string, score?: number, professionalComment?: string, createdAt?: object }>>}
   */
  async function fetchGlobalArchive(limit) {
    const cap = Math.min(Math.max(Number(limit) || 10, 1), 30);
    const snapshot = await db.collection("global_reports").orderBy("createdAt", "desc").limit(cap).get();

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        imageUrl: data.imageUrl,
        score: data.score,
        professionalComment: data.professionalComment,
        analysis: data.analysis,
        comparison: data.comparison,
        value: data.value,
        metricValues: data.metricValues,
        createdAt: data.createdAt
      };
    });
  }

  api.ready = true;
  api.saveReport = saveReport;
  api.fetchGlobalArchive = fetchGlobalArchive;
})();
