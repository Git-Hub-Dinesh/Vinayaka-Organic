# Nattu Sakkarai Website - Start Server Script
# Double-click this file or run: powershell -ExecutionPolicy Bypass -File START_SERVER.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Nattu Sakkarai Website Server" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting Python HTTP Server..." -ForegroundColor Green
Write-Host ""
Write-Host "Once server starts, open your browser to:" -ForegroundColor White
Write-Host "http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press CTRL+C to stop the server" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Change to script directory
Set-Location $PSScriptRoot

# Start Python HTTP server
try {
    python -m http.server 8000
} catch {
    Write-Host "Error: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Python from https://www.python.org/downloads/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Press any key to exit..." -ForegroundColor White
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
