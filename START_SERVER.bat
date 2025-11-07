@echo off
echo ========================================
echo   Nattu Sakkarai Website Server
echo ========================================
echo.
echo Starting Python HTTP Server...
echo.
echo Once server starts, open your browser to:
echo http://localhost:8000
echo.
echo Press CTRL+C to stop the server
echo ========================================
echo.

cd /d "%~dp0"
python -m http.server 8000
