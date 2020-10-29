<script>
    mifuncion(){
        alert('paso por aqui')
    }
</script>



…or create a new repository on the command line
echo "# pruebagit" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jaimitog7/pruebagit.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/jaimitog7/pruebagit.git
git branch -M main
git push -u origin main


//agregando nuevos cambios a rama nueva
nuevafuncion(){
    alert('holamundo ')
}


//agregando nuevos cambios a ramanueva para pull
nuevafuncion2(){
    alert('hola')
}
