|Modo   |   Comportamiento|
|---            |               ---|
no (default)    |   No se reinicia|
always  |   Siempre se reinicia, incluso si lo detuviste manualmente|
unless-stopped  |   Se reinicia a menos que tú lo hayas detenido con docker stop|
on-failure  |   Solo se reinicia si termina con error (exit code ≠ 0)|