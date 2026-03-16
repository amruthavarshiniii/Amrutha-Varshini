@echo off
echo Starting Portfolio Server on http://localhost:5173...
echo.
echo NOTE: If you see Git help text, please close this and just double-click index.html directly.
echo.
powershell -NoProfile -Command "$Server = New-Object Net.HttpListener; $Server.Prefixes.Add('http://localhost:5173/'); $Server.Start(); Write-Host 'Listening on http://localhost:5173 ...'; while ($Server.IsListening) { $Context = $Server.GetContext(); $Request = $Context.Request; $Response = $Context.Response; $FilePath = join-path $PWD $Request.Url.LocalPath; if (Test-Path $FilePath -PathType Container) { $FilePath = join-path $FilePath 'index.html' }; if (Test-Path $FilePath) { $Content = [IO.File]::ReadAllBytes($FilePath); $Response.ContentLength64 = $Content.Length; $Response.OutputStream.Write($Content, 0, $Content.Length) } else { $Response.StatusCode = 404 }; $Response.Close() }"
pause
