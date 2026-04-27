@echo off
setlocal

cd /d "%~dp0"

echo [ACUA] Checking changes...
git status --short

set /p MSG=Commit message (default: update): 
if "%MSG%"=="" set MSG=update

echo.
echo [ACUA] Staging files...
git add .
if errorlevel 1 goto :fail

echo [ACUA] Creating commit...
git commit -m "%MSG%"
if errorlevel 1 goto :fail

echo [ACUA] Pushing to origin/main...
git push origin main
if errorlevel 1 goto :fail

echo.
echo [ACUA] Done. Changes pushed successfully.
pause
exit /b 0

:fail
echo.
echo [ACUA] Failed. Check messages above.
pause
exit /b 1
