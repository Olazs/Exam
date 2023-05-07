# 2023 Webfejlesztő vizsgaremek

Hogyan futtathatod a projektet? 

Elsőnek szükséged lesz a két szerverre. A két szervert a két főmappából indíthatod. Szükséged lesz azonban Node.js-re a számítógépen, valamint Pythonra, ami megadja a virtuális környezetet. 
Powershell használata ajánlott. 

Frontend aktiválása: 

    cd Frontend
    npm run dev

Backend aktiválása: 

    cd backend
    \Scripts\Activate.ps1
    cd root
    python manage.py runserver

Kész is! A Localhost:5173 alatt működött a react oldal. A backend-et 127.0.0.1-en a 8000 port alatt futtattam.
