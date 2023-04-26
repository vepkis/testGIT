# testGIT (Este es un repositorio de prueba.)


## Descripción
Este repositorio forma parte parte de un ejercicio para el curso "GIT y herramientas para implementar el control de versiones en aplicaciones para desarrolladores/as", impartido por el [IPAP](https://www.ipap.gba.gob.ar/) para trabajadoras/es de la Provincia de Buenos Aires.
26/04/2023

## Informaciòn sobre GIT:
- [git - la guía sencilla](https://rogerdudler.github.io/git-guide/index.es.html?fbclid=IwAR3_kT0p40sUPTa1_XKFsTt7LfCxsEJ8gaQ5YQqVWG6virDruLlQ6Ou57c0)
- [git-scm](https://git-scm.com/book/es/v2/Ramificaciones-en-Git-¿Qué-es-una-rama%3F)
- [cheatsheet GIT](https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf)
- [cheatsheet GIT_2](https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf)

## 1. Creación del repositorio remoto (principal)
![Creación del repositorio](/imagenes/ima_1.png)


## 2. Clonación en maquina local
![Clonado](/imagenes/ima_2.png)
![Creación del repositorio local](/imagenes/ima_3.png)

## 3. Prueba de conección entre repositorios y primer commit

Use una imagen de mi autoria par verificar la conecciòn de los repositorios
![Commit imagen](/imagenes/ima_4.png)
push a repositorio remoto
![push a repositorio remoto](/imagenes/ima_5.png)


## 4. Segundo commit

En este segundo commit subi, los archivos de '[poncho](https://github.com/argob/poncho)' descargados previamente a mi computadora

![Clonado](/imagenes/ima_6.png)

## 5. Actualización,creación de rama y fusionado
Revisando la consigna me di cuenta que clone en la rama que no era el repositorio de "poncho". Por lo tanto: cree la rama "Proyectos", clone allí el repositorio de Poncho mediante:

```
git clone --recurse-submodules
```

luego de eso, fusione esa rama con la principal.

![MERGE final](/imagenes/ima_7.png)


# Diferencias entre SUBVERSIONES Y GIT

| Subversión | GIT |
| ------ | ------ |
| Centralizado | Distribuido |
| Checkouts del repo central | Clone y pulls |
| Los cambios no son versionados | Cambios versionados |
| Cada check-in incrementa el valor de la versiòn | El repositorio local mantiene la versión histórica |

# Diferencias entre GITLAB Y GITHUB

| [GITLAB](https://about.gitlab.com) | [GITHUB](https://github.com/) |
| ------ | ------ |
| Ruby, Go, Vue.js | Ruby on rails |
| Mayor control sobre los niveles de autenticaciòn (Puede gestionar los permisos de cada usuari+) | Los niveles de autenticación son acotados |
| Documentación muy detallada para mudar repositorios a otros Software de Contro de Versiones | Documentación poco detallada |
| Permite importar proyectos | NO permite importar proyectos |
| Licencia de código abierto | ------ |


