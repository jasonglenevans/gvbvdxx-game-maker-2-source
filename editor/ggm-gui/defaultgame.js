setTimeout(() => {
readFileAsResource(
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDguNDgzMzEiIGhlaWdodD0iMTA3LjQyMzU4IiB2aWV3Qm94PSIwLDAsMTA4LjQ4MzMxLDEwNy40MjM1OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS43NjgzLC0xMjUuMTA4MjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM5NDk0OTQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMjE1LjQ1NjI0LDE5Ny4yMjYxOGMwLDAgLTQuNzc2MDcsLTMuODQ0MjQgLTcuMjAxNjcsLTExLjA5ODY1Yy0xLjgwMjI5LC01LjM5MDIzIC0xLjU2MjE3LC0xMy41MTQzMyAtMS4wNDU2OSwtMTguODM0NzdjMC4zNTM4MSwtMy42NDQ2OSAwLjE3NTc4LC0zLjkzOTYzIDAuOTY2NDgsLTYuNTk2NzJjMS42ODIyOCwtNS42NTMxNyA0LjY1NzY0LC0yLjM5MzQgNy43Nzg4NiwtMi45ODk0YzEuNjI1MzgsLTAuMzEwMzcgNi42Mjc4LDIuOTQwNSA2LjYyNzgsMi45NDA1YzAsMCAtMy41MDExNiwwLjE2NDQgNy4yNDAwMSwwLjIzMzI1YzAuNDM4ODcsMC4wMDI4MSAyMS41NDA5MSwtMC40NzA3OCAyMS45NzU3MSwtMC40NzA3OGM0LjUwMzIxLDAgMTcuMzM5NDEsLTIuMTM3NzQgMTcuMzM5NDEsLTIuMTM3NzRjMCwwIDIuMzA2Nyw1LjAzODk0IDQuNDgyNjIsOS43MTM4NWMwLjgxMTQzLDEuNzQzMzQgMS42MDQ2OCwzLjIzMTU2IDIuMjUzMzMsNC42ODQxNmMxLjgwMDgzLDQuMDMyOCAxLjU2NTEsNC4yMTg1MSAyLjY5Njc5LDYuNjI3NTljMy4xNDgyNyw2LjcwMTg1IC0zLjQ5NDU5LDE4LjY0MTI3IC0zLjQ5NDU5LDE4LjY0MTI3eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjM0LjYzNTMzLDE2MS41MzUyM2wtMC4yMzc1MywxLjY2MjY4YzAsMCA1LjU5NDc2LDAuNjQyMDIgOC4xMzk3MywwLjkzNDA3YzIuMjQ3NzIsMC4yNTc5MyA2LjM0OTM3LDAuNzI4NjEgNi4zNDkzNywwLjcyODYxbDMuMzI1MzcsLTQuMjc1NDdsLTQuMDM3OTUsNC45ODgwNWMwLDAgLTQuNzc2MTYsOC43NzY2IC01LjEzNzQsMTMuMDcxMzZjLTAuMzUxMDUsOS4zNzM1NCA4Ljc5OTY3LDE4LjM0Mzk0IDguNzk5NjcsMTguMzQzOTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjIuNTIxNSwxNjguMTg1OThjMCwwIDYuMjM5NzMsMC4zNTA0IDguMDA5MTEsMi43MjI5OGMwLjk0ODk3LDEuMjcyNDggMy4zNzEwMiw4LjA2NzUyIDIuNTg4NzEsMTMuNDUwMTJjLTAuMjg0MDIsMS45NTQxOSAtMy45Nzc1NCwxMC4wODg0IC04LjQ2NzA5LDEwLjYwNjY5Yy0xLjY1NTU5LDAuMTkxMTMgLTcuMzM0MzEsLTEuMjI1ODYgLTEwLjc2MDg5LC00LjgzOTk1Yy0yLjc3NjkyLC0yLjkyODg3IC0zLjU4NTU3LC03LjcwODM0IC0zLjQ1MzM4LC0xMS4wMTI0MmMwLjEzMzI3LC0zLjMzMTA3IDMuMDUzNTgsLTYuNzc0ODQgNi4zMDExNiwtOC43NzQxOGMyLjY2NDU5LC0xLjY0MDQzIDUuNzgyMzgsLTIuMTUzMjQgNS43ODIzOCwtMi4xNTMyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI3Mi42Mzk1MSwxODEuMjQ5OTJjMCw2LjQyNzkyIC00Ljk0NSwxMi44MjY0MiAtMTEuMDQ0OTcsMTIuODI2NDJjLTYuMDk5OTcsMCAtMTEuNzU3NTUsLTYuMTYwOTYgLTExLjc1NzU1LC0xMi41ODg4OWMwLC02LjQyNzkzIDMuOTk0OSwtMTEuMTYzNzMgMTAuMDk0ODYsLTExLjE2MzczYzEuNDM4ODgsMCA0LjIzODY1LDEuMDAyNTEgNS40OTkyNSwxLjUyOTk3YzQuMDgzNjEsMS43MDg2MyA3LjIwODQsNC40ODQ1NSA3LjIwODQsOS4zOTYyNHoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMjkzLjI1MTYxLDE1Ni43OTk3OWMwLDAgLTcuNzkxMyw0LjU4NzAyIC0xMS42MDM0NSw1LjQzODg1Yy0yLjE3NDgyLDAuNDg1OTcgLTcuNDAxOTEsMC42NDM3NSAtOS44NjA3MSwtMC4zNTA0Yy0wLjM2NDUzLC0wLjE0NzM5IC0xLjM0Nzg3LC0xLjQ3NDk4IC0wLjI0MzA4LC0yLjg4MTQ3YzAuOTUxNTMsLTEuMjExNCAzLjc2NDY2LC0yLjQ4OTEyIDYuMjAwMTYsLTMuMDMwNzZjNS42NjI2LC0xLjI1OTMgMTUuMjczMDgsMC43ODMwMiAxNS4yNzMwOCwwLjc4MzAyIiBmaWxsPSIjZDhkOGQ4Ii8+PHBhdGggZD0iTTI3NS43MjEwNywxNTYuMzk3NThsMC42MTg3NSw2LjEzNTQyIiBmaWxsPSJub25lIi8+PC9nPjxwYXRoIGQ9Ik0yMTYuMTI2ODksMjAyLjQ5MDIyYzAsMCAtMC44NDA4OSwtOS4xNzE4MSAtMS4xNDkzNCwtMTIuNTM2MDJjLTAuMjA3ODMsLTIuMjY2NzIgLTAuNTIxNzcsLTUuNjkwOTMgLTAuNTIxNzcsLTUuNjkwOTNjMCwwIDEuMDAzNjQsLTQuMjQ3NjkgMS40NzkxLC00LjQ2NjE0YzEuMDg4OTcsLTAuNTAwMyAyLjk0ODc2LC0yLjkyNjQ0IDUuNTMzMTEsLTIuNjMxMzFjMi4wNjM4MiwwLjIzNTcgNS4yNzExOSwyLjQyNDExIDYuMjU1MDgsMi45NTIzN2MxLjczMzA3LDAuOTMwNTIgMi4wNzU0NSw2LjQzMTE2IDIuMDc1NDUsNi40MzExNmwtMC4zODg0OCwxNS4yNDMwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjOTQ5NDk0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ij48Zz48cGF0aCBkPSJNMjYzLjY2NDY5LDIwNS41MzE1NGwtMi45MDQyMywtNS4xNzk0OWw0LjM1MDc3LC0yLjQzOTU2bDIuOTA0MjMsNS4xNzk0OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjY4Ljg0MzQ1LDIxMC4yNjQzNWw2Ljk2OTgzLDguMTkwMjNsLTAuNzE1MSw5LjcxNTE5bC0yLjk2MzQzLDIuMjMyNTRsLTEuNDcwMDYsMC44NzkwMmwtOS45ODczOSwtMC4wMTUwM2wtMy43Mzc1NywtMS4zNzI2OGwxLjUyODM0LC0yLjA2NTIzbDEuNDcwMDYsLTAuODc5MDJsMS45OTExNiwtMS44MDQ2OGwzLjM1NjMzLC0wLjU0ODU1bC0zLjY3OTI5LC0yLjU1ODg4bC0xLjIwMiwtNC41Nzc0OWwtMS45MTM3MiwtNC42MTI0NnoiIGZpbGw9IiM5NDk0OTQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNTguNDkwNjIsMjEyLjg0NzNsLTAuNjE4NDgsLTEuOTMyODlsMi42MTcxNSwtNC44NjU0OWwzLjUwNzg0LC0zLjYzMjY3bDMuNTU4NiwwLjE3NDgzbDIuMjY3NSwyLjI1MTcxbC0wLjY5NTkyLDQuNDg0MjZ6IiBmaWxsPSIjMjQyNDI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjY0LjUxNDg1LDIxMS4yNDA3NmwtMy40MDcwOSwtMy4yNTg5NGwwLjM2NTQ1LC0yLjU5Nzk5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGcgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCI+PHBhdGggZD0iTTI2Ny4wMzAzOSwyMjQuOTYxOThsLTQuODIwNDMsLTMuNzU2MjlsLTIuMTgzMDcsLTcuODY1NThsNy40ODA1NiwtMi4yNjgwOGw4LjA4MzgzLDguNjk3MzRsLTAuODI3NDcsNS43Mzc5NXoiIGZpbGw9IiM4YzYyMDAiIHN0cm9rZS13aWR0aD0iTmFOIi8+PHBhdGggZD0iTTI2MC45NDI5MiwyMTYuMDkwNjZsLTEuMjI2NDMsLTIuODkyMjNsNy4xOTYzNiwtMi40Mjg4MWw0Ljg4Mzg3LDIuMzIxMDF6IiBmaWxsPSIjOGMwMDgxIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yNTcuNjk5NTgsMjI5LjM5Mzc1bDEuNDEzNjMsLTIuMzUyMDZsMC45NjMyOSwtMC45NTkzN2wzLjQyNTgsLTAuNTMxNzhsMy4xMzE5OCwtMS4xOTM1MWw3LjMxNTkyLDAuMzI4NDJsLTEuMzk5NjYsNS41NjMwMmwtMTEuMzA0NzgsMC43MjY1OXoiIGZpbGw9IiM4YzAwODEiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMjY1LjYzMDA1LDIxNS4xMTU3M2MwLjM5ODE2LC0wLjI3NTkzIDAuNzE3MzIsLTAuNDYyNjEgMS4yODAzOCwtMC41MjA0OGMwLjQzMzU0LC0wLjAwOTUzIDEuMDQwMTEsMC4wMDIyOCAxLjQxODIsMC4yODQxNGMwLjI2ODQsMC4yMDAxIDAuMzI2MTgsMC42MjczNyAwLjI1ODE0LDEuMDkwNjFjLTAuODc1OTEsMC40MzkzNiAtMS43MTQ0LDAuOTQ0NjMgLTIuNTY0ODQsMS40MzU0YzAsMCAtMC4xMjUzOSwwLjA3MjM2IC0wLjEwNDc4LDAuMjAwODVjLTEuMDYyMzksLTAuMzIzOTUgLTEuNTIyOTYsLTEuNDI1MjYgLTAuNjczNzEsLTIuNDU3ODZjMCwwIDAuMTc2MDIsLTAuMjA5NTUgMC4zODU1OCwtMC4wMzM1NGMwLjAwMDM1LDAuMDAwMjkgMC4wMDA3LDAuMDAwNTkgMC4wMDEwNSwwLjAwMDg3ek0yNjcuMjk5MjcsMjE1LjQ0Mzg3YzAuMDk4MTcsLTAuMDU2NjYgMC4xMzE4NSwtMC4xODIxOSAwLjA3NTE5LC0wLjI4MDM3Yy0wLjA1NjY2LC0wLjA5ODE3IC0wLjE4MjE4LC0wLjEzMTg1IC0wLjI4MDM3LC0wLjA3NTE5Yy0wLjA5ODE3LDAuMDU2NjYgLTAuMTMxODUsMC4xODIxOSAtMC4wNzUxOCwwLjI4MDM4YzAuMDU2NjYsMC4wOTgxNyAwLjE4MjE5LDAuMTMxODUgMC4yODAzNywwLjA3NTE5ek0yNjUuODMwMzIsMjE2LjI1MjA4YzAuMDk4MTcsLTAuMDU2NjYgMC4xMzE4NSwtMC4xODIxOSAwLjA3NTE5LC0wLjI4MDM3Yy0wLjA1NjY2LC0wLjA5ODE3IC0wLjE4MjE5LC0wLjEzMTg1IC0wLjI4MDM4LC0wLjA3NTE4Yy0wLjA5ODE3LDAuMDU2NjYgLTAuMTMxODUsMC4xODIxOCAtMC4wNzUxOCwwLjI4MDM3YzAuMDU2NjYsMC4wOTgxNyAwLjE4MjE4LDAuMTMxODYgMC4yODAzNywwLjA3NTJ6Ii8+PHBhdGggZD0iTTI2NC45MzIyNywyMTguMDUxNTljMC4wNTE0OSwtMC4wMjk3MyAwLjA5OTYsLTAuMDQ2NzQgMC4xNDQxMSwtMC4wNTQyOWMwLjAyNTA0LC0wLjExMjk1IDAuMTA1MzQsLTAuMjg4MzYgMC4zNjI1MSwtMC4yOTI1NWMwLjM4MDAyLC0wLjAwNjE5IDAuMzg2MjEsMC4zNzM4NCAwLjM4NjIxLDAuMzczODRjMC4wMDIxNCwwLjIyMzkzIC0wLjAxMTMyLDAuNDUwMzkgLTAuMDQ4NTcsMC42NzE5N2MwLjA1NTU5LC0wLjAwNjUyIDAuMDk1NjQsLTAuMDAxNyAwLjA5NTY0LC0wLjAwMTdjMC42OTk3NiwwLjA4NjkyIDEuMzk5OTUsMC4xMDA4OCAyLjA5OTgyLDAuMTQ5MzljMC4zNTkxNCwtMC41OTA4NiAwLjczODgzLC0xLjE2Nzk5IDEuMTIzODQsLTEuNzQ5NjVjLTAuMTYyOTksLTAuMDk3NjYgLTAuMzAyMDUsLTAuMTkwNjUgLTAuMzk1NzcsLTAuMjUyMjZjMCwwIC0wLjE4MjI0LC0wLjEyMDM3IC0wLjE3OTE3LC0wLjMxNjc3Yy0wLjAxMjI5LC0wLjAxODMyIC0wLjAyMzQ2LC0wLjAzODgxIC0wLjAzMzIxLC0wLjA2MTc1Yy0wLjE3OTk5LDAuNTI5ODcgLTAuNDgwNiwxLjAwNDE5IC0wLjc3MjgxLDEuMTMyMDdjLTAuMDk4NDQsMC4wNDMwOCAtMS4wMTA4NSwwLjAyODIzIC0xLjExODczLDAuMDI3MjJjLTAuMDcwMDksLTAuMDAwNjYgLTAuMTM4NywtMC4wMDQyMSAtMC4yMDU3NSwtMC4wMTA0OWMwLjY5MjQyLC0wLjQwMTEyIDEuMzc4MzIsLTAuODA5NzUgMi4wODUxNywtMS4xODA3N2MtMC4wMDYyMiwtMC4wMTg1OSAtMC4wMTE2MSwtMC4wMzg1NSAtMC4wMTU5OCwtMC4wNmMtMC4wNzYxMywtMC4zNzIzNyAwLjI5NjI1LC0wLjQ0ODUgMC4yOTYyNSwtMC40NDg1bDAuMjYwMDcsLTAuMDM2MDJjMC40MTM0MSwwLjA0MDU0IDIuNTMyMzMsMC41NTIyOSAxLjYxNjA0LDEuNDg3NjFjLTAuMTk3MzYsMC4yMDE0NSAtMC41MTY2NCwwLjE3NDE2IC0wLjg0NTU1LDAuMDU4NTZjLTAuMzIyMjIsMC40OTgwNCAtMC42MzI3NCwwLjk5NjQ3IC0wLjkzNjU1LDEuNDk3NTljMC4wODk3MSwwLjAxMjM0IDAuMTc5NDIsMC4wMjU5OCAwLjI2OTEyLDAuMDQxMTZjMC40ODg1MiwwLjA4MjY4IDAuOTQ1NjMsMC4yNTY1MSAxLjQyMzE0LDAuMzY3MTRjMC4xNTQ1MywtMC4xODA4NyAwLjMyNjQ2LC0wLjM3NDI1IDAuNTA5NTEsLTAuNjE1NzNjMCwwIDAuMjMwODEsLTAuMzAxOTYgMC41MzI3NywtMC4wNzExNmMwLjAyOTk4LDAuMDIyOSAwLjA1NDcxLDAuMDQ2NTMgMC4wNzQ5NCwwLjA3MDQ5YzAuMDMwODEsMC4wMDE1MiAwLjA2NDAzLDAuMDA2NyAwLjA5OTc4LDAuMDE2MjhjMC4zNjcxLDAuMDk4NDUgMC4yNjg2NiwwLjQ2NTU1IDAuMjY4NjYsMC40NjU1NWwtMC4wNTI0MiwwLjE4MDdjLTAuMzUwOTgsMC44MTk5OCAtMC42NTY2NiwxLjI0NjQ0IC0xLjE0MTc5LDEuNjU4MjVsMC4wMjI5NiwwLjAxOTY2bC0wLjQ4ODY1LDAuNTcwNjhjLTAuMDI4MzUsMC4wMzQ3MiAtMC4wNjMzNSwwLjA2NDk3IC0wLjEwNDQ4LDAuMDg4NzFjLTAuMTgxODEsMC4xMDQ5MyAtMC40MTQyNCwwLjA0MjU5IC0wLjUxOTE2LC0wLjEzOTI0Yy0wLjA1MjQ1LC0wLjA5MDkgLTAuMDYzMSwtMC4xOTQ0OCAtMC4wMzc5MSwtMC4yODg0bDAuMTE2NTksLTAuNDM0NzVjMC4wNDQ2MiwtMC4zNjQwMyAwLjEzMTM0LC0wLjYzNDg5IDAuMjUwNzYsLTAuODY2MjdjLTAuMzU2NTEsLTAuMDk5MTggLTAuNzA5LC0wLjIxIC0xLjA3ODUzLC0wLjI3MTkyYy0wLjE5MTE0LC0wLjAzMjAyIC0wLjM4MTkyLC0wLjA1NzI4IC0wLjU3MjQ5LC0wLjA3Nzg2Yy0wLjMzMzM1LDAuNTYyOTQgLTAuNjYxMjYsMS4xMzA1NyAtMC45OTA2NCwxLjcwNjE2Yy0wLjA3MDc5LDAuMTIzNzIgLTAuNDU0OTQsMC44MzI5NCAtMC43NDI4MSwxLjMzMjAxYzAuMDM5ODEsMC4wMDk0OSAwLjA4MTQyLDAuMDE3IDAuMTI1MTQsMC4wMjEzNGwwLjMwNzQsMC4yMjg1MmMwLDAgMC4xODk5NiwwLjMyOTIgLTAuMTM5MjQsMC41MTkxNmMtMC4xNzk0NSwwLjEwMzU2IC0wLjMxNzU0LDAuMDUyODMgLTAuNDA2MDIsLTAuMDE0NzRjLTAuNDc2NTQsLTAuMDc3MTIgLTAuNzE2MzcsLTAuMTg5MDYgLTAuOTIzMzYsLTAuNDQ3MTJsLTAuMDQ4NzUsMC4wNDcxMWwtMC4yNjYzNCwtMC4yNzU1N2MtMC4wMjM1NywtMC4wMjMzMyAtMC4wNDQ0NCwtMC4wNTAxOCAtMC4wNjE4MSwtMC4wODAzYy0wLjEwNDkzLC0wLjE4MTgxIC0wLjA0MjU5LC0wLjQxNDIzIDAuMTM5MjEsLTAuNTE5MTZjMC4wNzI3NSwtMC4wNDE5NyAwLjE1MzU5LC0wLjA1NzE4IDAuMjMxMTMsLTAuMDQ4NjdsMC40MDIzNywwLjAzOTFsLTAuMDA1NDUsMC4wNTYxNGwwLjEzMzg5LC0wLjAyMDE0YzAuMDA0NjgsMC4wNTc1MSAwLjAxNTcyLDAuMTkzMTcgMC4wMjAxNiwwLjI0NzY2Yy0wLjA2MTQxLC0wLjc5NjQ4IDAuNTg2NzcsLTEuMzk4NDcgMC45NDMwNiwtMi4xMDVjMC4xMjkzMSwtMC4yNTY0MyAwLjI2NDE1LC0wLjUwODA0IDAuNDAzNSwtMC43NTYwOWMtMC41ODYyOCwtMC4wMzQ2MiAtMS4xNzI2LC0wLjA1NTc4IC0xLjc2MzAyLC0wLjEyNTI0YzAsMCAtMC4wMDM3NSwtMC4wMDA0NiAtMC4wMTA0MiwtMC4wMDE2NWMtMC4wMjA0OCwwLjEwMzkgLTAuMDg0MDMsMC4xOTg3NyAtMC4xODI5NywwLjI1NTg1Yy0wLjE4MTgxLDAuMTA0OTMgLTAuNDE0MjQsMC4wNDI1OSAtMC41MTkxNSwtMC4xMzkyM2MtMC4wMDcyNSwtMC4wMTI1NiAtMC4wMTM3LC0wLjAyNTM2IC0wLjAxOTM3LC0wLjAzODM2bC0wLjE5NDIxLC0wLjQzMDU3bDAuMTAzNCwtMC4wNDY2NGwtMC4wMDIwOSwtMC4wMTI1NGwwLjAxOTAyLC0wLjAwMzE2Yy0wLjEwMDk4LC0wLjE5MDE2IC0wLjE3MDI0LC0wLjM5MTg1IC0wLjE4NDk5LC0wLjYwMTQ1bDAuMDAyNywwLjA4NDk3YzAsMCAtMC4xODk5NywtMC4zMjkxOSAwLjEzOTIzLC0wLjUxOTE1eiIvPjwvZz48L2c+PC9nPjxwYXRoIGQ9Ik0yNTUuMDQ4MjEsMTc4LjI0MTEzbDIuNjYzNzcsLTIuMDQ2NDZsNS4zMzU2LC0wLjQ5ODUybDQuNDAxNTksMi45NzI0M2wwLjc4NDM0LDYuODEwNGwtMy40MTkzNCwxNS4xMjMxbC0xLjUwNTY3LDAuNTIxMzRsLTExLjAzODIxLC0xLjY4NjJsMS4wNDQ3NywtMTcuMTExMjF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzk0OTQ5NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iPjxnPjxwYXRoIGQ9Ik0yMTIuMzM1NzUsMjA2Ljg0MzdsMi41MDc2LC01LjI3ODc5bDQuNjA0NywxLjkwOTM4bC0yLjUwNzU5LDUuMjc4Nzd6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTk3Ljk5OTA5LDIzMS43NjM3NWwxLjg1NDcxLC00LjIxMzc5YzAsMCAyLjcxODMxLC0wLjg2MzM4IDQuMjM5OTUsLTEuMDg3MTVjMC41NDAwNiwtMC4wNzk0MSAzLjI1OTU4LDAuNjQ4MiAzLjIyMzA1LC0wLjIzNDczYy0wLjAzMjM0LC0wLjc4MTk4IC0yLjg1NDYyLC0zLjE4NDc2IC0yLjAyMTIyLC0zLjI2OGMwLjgwMTc3LC0wLjA4MDA5IDYuNTg1MDYsLTkuODkwODMgNy43MDczNywtOS42MjQ4M2MyLjg5MjkzLDAuNjg1NjYgMTAuMjQ0MTksMS43MzM0NCAxMC4yNDQxOSwxLjczMzQ0bC04LjExNzU4LDE1LjMzNTEyYzAsMCAtMTMuMjM3MDMsMi4yODAxOCAtMTUuOTkwNDcsMi40OTg3NWMtMS4wNTA3NiwwLjA4MzQxIC0xLjEzOTk4LC0xLjEzODg1IC0xLjEzOTk4LC0xLjEzODg1eiIgZmlsbD0iIzk0OTQ5NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjEyLjAxNjg5LDIxMy4yNDI3NWwtMC42ODAzMywtMy4xNDU1NGwxLjIxODI5LC0yLjQ4MDM2bDIuMzQ3MDQsLTEuMTYxMTlsMy4wMjA1MiwwLjEyM2w2Ljg3MjAxLDcuMzM1MjF6IiBmaWxsPSIjMjQyNDI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMTkuODkyNTksMjEwLjIzbC0wLjQzMzQ4LDIuMTUwMThsLTEuNzg2MzcsMS4xODk5OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIwNy4xNTQxNywyMjUuNjY1MDRsMi42Njg5LDUuMTcxMzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNMjA2Ljk4MTA4LDIyMy4yMTI0OGw0LjM3MDE3LC02Ljg3ODU1bDAuOTY5OTMsLTMuMDc3ODhsOS43ODcwNiwyLjk5MjA2bC04LjU0MDU1LDEzLjcyMTA2eiIgZmlsbD0iIzhjNjIwMCIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjExLjM1MjMsMjE2Ljg5NzIxbDAuOTY2OTEsLTMuMjY4ODhsOS41MjgsMi40NzQ2MWwtMS44NDc1NSwzLjM5ODM2eiIgZmlsbD0iIzhjMDA4MSIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMTk5LjAwOTA1LDIzMi4yMDE4N2wwLjk4Mzg5LC0yLjUwNTI0bDAuNzg3NTMsLTEuMDk3MTVsMy4zMjQ2NCwtMS4xNzEzNmwzLjEyNjQ1LC0wLjE4NzJsLTAuMzY4NTksLTQuMTI0MDJsMS45OTkwOCwtMi4yNDU5N2w1LjEzNDI5LDkuMjQ5MDN6IiBmaWxsPSIjOGMwMDgxIiBzdHJva2Utd2lkdGg9IjAiLz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTIxNi41MTg3MywyMTguMDY1MTVjMC40NDUxOCwwLjE4OTYgMC43NzE3NSwwLjM1ODk5IDEuMTA5NTYsMC43OTQ4MmMwLjIyOTM1LDAuMzUzMjUgMC41MjgxOCwwLjg2MDE5IDAuNDczNDYsMS4zMTQ3MWMtMC4wMzg4NCwwLjMyMjY2IC0wLjM4NDUsMC41ODU5OSAtMC44MjU4NSwwLjc2MzU0Yy0wLjgzMjE4LC0wLjUwMTcyIC0xLjcwMzE1LC0wLjkzOTI1IC0yLjU2NzUxLC0xLjM5Mzk4YzAsMCAtMC4xMjc0NCwtMC4wNjcwNSAtMC4yMjk3NCwwLjAxNDhjLTAuMjU3MTUsLTEuMDQwOSAwLjQ3NDkzLC0xLjk3NzA1IDEuODE0MzIsLTEuNzk2NzRjMCwwIDAuMjczNzEsMC4wMzk2MyAwLjIyNiwwLjMwMTU0Yy0wLjAwMDA5LDAuMDAwNDUgLTAuMDAwMTUsMC4wMDA4OCAtMC4wMDAyMywwLjAwMTMxek0yMTcuMDgxNTIsMjE5LjYwOTM3YzAuMDk5OCwwLjA1MjUxIDAuMjI3MTMsMC4wMTY5NiAwLjI4NDQ2LC0wLjA3OTM5YzAuMDU3MzIsLTAuMDk2MzUgMC4wMjI4OSwtMC4yMTcgLTAuMDc2OSwtMC4yNjk1Yy0wLjA5OTgsLTAuMDUyNTEgLTAuMjI3MTQsLTAuMDE2OTUgLTAuMjg0NDYsMC4wNzkzOWMtMC4wNTczMiwwLjA5NjM1IC0wLjAyMjg5LDAuMjE3IDAuMDc2OSwwLjI2OTUxek0yMTUuNjIzMjQsMjE4LjgwNGMwLjA5OTgsMC4wNTI1MSAwLjIyNzEzLDAuMDE2OTYgMC4yODQ0NiwtMC4wNzkzOWMwLjA1NzMyLC0wLjA5NjM1IDAuMDIyODcsLTAuMjE3IC0wLjA3NjksLTAuMjY5NWMtMC4wOTk4LC0wLjA1MjUxIC0wLjIyNzE0LC0wLjAxNjk1IC0wLjI4NDQ2LDAuMDc5MzljLTAuMDU3MzIsMC4wOTYzNSAtMC4wMjI4OCwwLjIxNzAxIDAuMDc2OSwwLjI2OTV6Ii8+PHBhdGggZD0iTTIxMy41ODU3MSwyMTguOTcwMzhjMC4wNTIzNiwwLjAyNzU0IDAuMDkxODEsMC4wNTg2OCAwLjEyMTEsMC4wOTE2MWMwLjExMTk0LC0wLjAzNjMyIDAuMzA2ODQsLTAuMDU4NTIgMC40NDE2LDAuMTUxNzhjMC4xOTkxNSwwLjMxMDc1IC0wLjEzMTMzLDAuNTA3NjIgLTAuMTMxMzMsMC41MDc2MmMtMC4xOTU0OSwwLjExNDc2IC0wLjQwMTE2LDAuMjE3OTUgLTAuNjE0NjYsMC4yOTljMC4wMzQwNywwLjA0MjYyIDAuMDUwMjQsMC4wNzgxNCAwLjA1MDI0LDAuMDc4MTRjMC4yODAzNywwLjYyMTggMC42MjUwMywxLjIwNzE0IDAuOTM5MjEsMS44MDk2NGMwLjcwMTc5LC0wLjAwMTU1IDEuNDAxOTgsMC4wMjA4IDIuMTA4ODYsMC4wNDUyNmMwLjAwMjY1LC0wLjE4Mzg4IDAuMDEzNDEsLTAuMzQ1NjcgMC4wMTk3MywtMC40NTQxNmMwLDAgMC4wMTI3NywtMC4yMTEyNiAwLjE4Njc2LC0wLjMwNzg0YzAuMDA5ODIsLTAuMDE5MzggMC4wMjIxMSwtMC4wMzg5NyAwLjAzNzI3LC0wLjA1ODU4Yy0wLjU1NjkzLDAuMTE4NzMgLTEuMTI2NTYsMC4xMDk4IC0xLjM4Nzc2LC0wLjA2N2MtMC4wODgsLTAuMDU5NTYgLTAuNTQwMDMsLTAuODIwNjEgLTAuNTk0MTQsLTAuOTEwMjNjLTAuMDM1MTYsLTAuMDU4MjEgLTAuMDY3MDEsLTAuMTE2NjggLTAuMDk1NjYsLTAuMTc1MjNjMC43MDUwNywwLjM2OTQ3IDEuNDEzNDQsMC43Mjk3MyAyLjA5OTQ1LDEuMTI2M2MwLjAxMzE1LC0wLjAxNDUxIDAuMDI3OTIsLTAuMDI5MDIgMC4wNDQ1MiwtMC4wNDM0OGMwLjI4ODA5LC0wLjI1MDc4IDAuNTQ0NzQsMC4wMTgzNiAwLjU0NDc0LDAuMDE4MzZsMC4xNjQxOCwwLjE5NjYyYzAuMTc1MTQsMC4zNjE4OCAwLjgwNTk4LDIuMzcwMTUgLTAuNDgyMjEsMi4wODU0Yy0wLjI3NzQ2LC0wLjA2MTM0IC0wLjQxNjI0LC0wLjMzODgzIC0wLjQ4MjQxLC0wLjY2ODc4Yy0wLjYwMTQ2LC0wLjAxNDc5IC0xLjE5NzMxLC0wLjAxOTcyIC0xLjc5MjEsLTAuMDE3NzhjMC4wMzQ5MSwwLjA4MDMzIDAuMDY4NjQsMC4xNjEzIDAuMTAxMDMsMC4yNDMwM2MwLjE3NjQ1LDAuNDQ1MTcgMC4yNTY4MSwwLjkxMDQ1IDAuNDAzMSwxLjM2MDY2YzAuMjM3NTYsMC4wMzYzNyAwLjQ5NDk1LDAuMDgwNzcgMC44MDAyNywwLjExMDA5YzAsMCAwLjM4Mjc0LDAuMDM4MjUgMC4zMzQwNCwwLjQwNDExYy0wLjAwNDg0LDAuMDM2MzIgLTAuMDEyOTcsMC4wNjg2NyAtMC4wMjM2OCwwLjA5NzQ2YzAuMDE0MzcsMC4wMjYyMSAwLjAyNjc1LDAuMDU2MjYgMC4wMzY1NiwwLjA5MDY0YzAuMTAwNywwLjM1Mjg4IC0wLjI3MTc2LDAuNDU2ODIgLTAuMjcxNzYsMC40NTY4MmwtMC4xODUzNiwwLjA0Nzg5Yy0wLjg5ODc2LDAuMTIzOSAtMS40Mjg5NSwwLjA4NjY2IC0yLjAzNzc4LC0wLjEwNjIybC0wLjAwNTU1LDAuMDI4ODlsLTAuNzUwMDgsLTAuMTE1NjFjLTAuMDQ0OTMsLTAuMDA1ODkgLTAuMDg5MzMsLTAuMDE5NTQgLTAuMTMxMTMsLTAuMDQxNTNjLTAuMTg0NzcsLTAuMDk3MjEgLTAuMjQ4NTIsLTAuMzIwNjQgLTAuMTQyNCwtMC40OTkwNGMwLjA1MzA3LC0wLjA4OTE5IDAuMTM4NTQsLTAuMTUwMjYgMC4yMzM4NSwtMC4xNzY4NWwwLjQ0MTA4LC0wLjEyMzA4YzAuMzQyMzMsLTAuMTQ2ODYgMC42MjQzMiwtMC4yMTE5MiAwLjg4ODMxLC0wLjIzMDA1Yy0wLjA5NDY1LC0wLjM0NDUgLTAuMTc3MDIsLTAuNjkxNTYgLTAuMzExMDQsLTEuMDI3OThjLTAuMDY5MywtMC4xNzQwMiAtMC4xNDQzOSwtMC4zNDQzNCAtMC4yMjM0NCwtMC41MTIxMmMtMC42NjQwOSwwLjAwODc1IC0xLjMyOTU5LDAuMDI0MzkgLTIuMDAyNzcsMC4wNDI4MWMtMC4xNDQ2OSwwLjAwMzk3IC0wLjk2MzEzLDAuMDQ0NTggLTEuNTQ3OTksMC4wNTg2OGMwLjAxMTk0LDAuMDM3NjYgMC4wMjY1NywwLjA3NTg0IDAuMDQ1MDUsMC4xMTQxNGwtMC4wNDM5MywwLjM2OTE5YzAsMCAtMC4xOTIxNSwwLjMyMzAyIC0wLjUyNjc0LDAuMTQ3MDFjLTAuMTgyMzksLTAuMDk1OTUgLTAuMjA4MjQsLTAuMjM1NTkgLTAuMTk0MDIsLTAuMzQyNzhjLTAuMTc1MjEsLTAuNDMyNDkgLTAuMTk5MiwtMC42ODcwOCAtMC4wNzgxNSwtMC45ODgyNWwtMC4wNjYyMSwtMC4wMTY0OWwwLjEwNjE3LC0wLjM1OTAzYzAuMDA4NDcsLTAuMDMxMjQgMC4wMjEzOSwtMC4wNjIwMyAwLjAzODk3LC0wLjA5MTU5YzAuMTA2MTMsLTAuMTc4NCAwLjM0MTk2LC0wLjI0NDIxIDAuNTI2NzMsLTAuMTQ2OTljMC4wNzM5MiwwLjAzODg5IDAuMTI4NDcsMC4wOTggMC4xNjA1NCwwLjE2NjMxbDAuMTcwNzgsMC4zNTIwNWwtMC4wNTIwOCwwLjAyMzgybDAuMDg1OTMsMC4xMDA0MmMtMC4wNDgxLDAuMDMyODggLTAuMTYxNTcsMC4xMTA0NiAtMC4yMDcxMywwLjE0MTYyYzAuNjY3OTEsLTAuNDUyNjUgMS41MjY4MSwtMC4yMjEwNyAyLjMyODY3LC0wLjI4MzM1YzAuMjkxMDMsLTAuMDIyNTkgMC41ODA2NSwtMC4wMzgyMSAwLjg2OTQ1LC0wLjA0ODMxYy0wLjI2ODQ1LC0wLjUwMTY3IC0wLjU0ODc2LC0wLjk5NjYyIC0wLjc4ODczLC0xLjUxOTNjMCwwIC0wLjAwMTUxLC0wLjAwMzMxIC0wLjAwMzg4LC0wLjAwOTQzYy0wLjEwMTY1LDAuMDM1NTIgLTAuMjE3MzIsMC4wMzA5IC0wLjMxNzg3LC0wLjAyMTk5Yy0wLjE4NDc3LC0wLjA5NzIxIC0wLjI0ODU0LC0wLjMyMDY0IC0wLjE0MjQxLC0wLjQ5OTAzYzAuMDA3MzIsLTAuMDEyMzIgMC4wMTUyOCwtMC4wMjQxMSAwLjAyMzc5LC0wLjAzNTM1bDAuMjc5LC0wLjM3NzY4bDAuMDkzNjcsMC4wNjE4NWwwLjAwOTk0LC0wLjAwODA1bDAuMDEyNDcsMC4wMTQxMmMwLjExNTQ3LC0wLjE3OTM3IDAuMjU3MjIsLTAuMzM4MzUgMC40MzM3MSwtMC40NTYzbC0wLjA3MzIxLDAuMDQ1MTFjMCwwIDAuMTkyMTYsLTAuMzIzMDEgMC41MjY3MiwtMC4xNDd6Ii8+PC9nPjwvZz48L2c+PHBhdGggZD0iTTIwOC41NDMxNSwxNTguOTE4MjVsMC45NjY5MiwtNy4zMzQyNGwtMjAuODgwNzcsLTAuNjA4MjJsLTEuNTM0NDEsLTEzLjY3ODQ4YzAsMCA1LjQ1MDc2LC0zLjY3NzMxIDExLjI3NTA5LC02LjAzMjA0YzQuMTMyODMsLTEuNjcwODcgOC41NDM3NiwtMS45NjMwMiA5LjI1MjA1LC0yLjIyMTExYzAuOTE2MywtMC4zMzM4OSA3LjkwMTU3LDAuMjU5MzEgMTEuMjE0MzIsMy43Mjc0N2M0LjYzNDgxLDQuODUyMjMgNS43OTYwNiwxMy4xODUxNCA1LjgxOTcyLDEzLjU2Njc0YzAuMjA4MzYsMy4zNjE3MiAtNC43MzM5OCw2LjU1Njc2IC00LjczMzk4LDYuNTU2NzZjMCwwIC0xLjg5OTA5LDIuNzMzMyAtMi4yNjc5NSwzLjcyNDE4Yy0wLjQxMjQsMS4xMDc4NSAtMC4wOTAzOSwyLjYxMTIyIC0wLjA5MDM5LDIuNjExMjJ6IiBmaWxsPSIjOTQ5NDk0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xODcuNjY0NCwxMzcuMjgwNmw4Ljk1NTc4LC00LjY4MDk5bDExLjI4MDMyLC0zLjE3NDUxbC0zLjY2ODU1LDkuODU1MDdsLTMuNDM4NDQsMy4yMDgzM2wtMTMuMTQ2NTIsMi4xNTkyM3oiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMDUuMTIzOTksMTQwLjk3NDczbC0xLjY2MTY5LC0wLjA1NzUzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjAzLjYwOTI4LDE0My41MzY2OGwyLjM4MjA2LC0wLjE1NTIxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjA2LjYyMTMxLDE0NS43Nzk5N2wtMS40MzI1MiwwLjE4ODA4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTg5Ljk0NTUzLDE1MC41MTlsOC4yMTg5OSwtMy45OTM0OWw5Ljk3ODM0LDAuMTA3NzhsNS43MzgzMSwtMC45ODk2OGw1LjUyNTU4LC0xLjcxMDA1bDMuOTc1MDIsLTEuMzk4NGMwLDAgMS42NjkzMiwxLjgyMTQyIDEuNzgwODUsMi41NzY2OGMwLjA4NjczLDAuNTg3MzUgLTIuMjE4MTYsMy43OTk2NSAtNC4zMDgxNCw2LjE5MTJjLTAuODQxNDYsMC45NjI4OCAtMS44MTYxMSwyLjk3Nzg2IC0xMC41NDE4NCwyLjU3OTEzYy0wLjk4NDgzLC0wLjA0NSAwLjQ0NzE2LC0xLjgzNzI1IC0xLjEyODU5LC0yLjAzMDQ3Yy02LjQwNDM4LC0wLjc4NTMzIC0xOC45MDIyNSwtMC44MjE3OCAtMTguOTAyMjUsLTAuODIxNzgiIGZpbGw9IiMzNzM3MzciIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMDEuOTAwNTQsMTUzLjIxNzk3bDAuOTcwMywtMS4xNzExOWwxLjIxMTg2LC0xLjQwNDYxbDEuNDMzMDksLTAuNDUwNTdsMS4xNjMwNSwxLjQ0NTI5bDAuNDQyNDMsMS45MDgwNmwtMC45OTA2NCwyLjM1ODY0bC0yLjYyMDU0LDAuNDMwMjRsLTEyLjM0OTU0LC0wLjIxMTUzbC0wLjkwOTI4LC0yLjM5MTE4eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIxMy41Nzc1MiwxNTcuNjY2NTZsLTAuMTQ2OTgsLTIuNjE5NDQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMTcuNDgyNTEsMTU0LjcxMjA0bC04LjU3MDQ4LDAuNDE2MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIxNC4yMTk0OCwxMzIuMjU4MjVsMC4zNTI0NCwtMy4zMTUxNmwxLjQ5MDA2LC0xLjg0OTc3bDMuMTkxODksMy45MTMybDAuMDgxMjQsNC41MTg1MmwtMy42MjY1LDEuNzc1OGwwLjU0ODczLC0yLjEyMDAzbC0xLjExMjk2LC0yLjE3NzU1eiIgZmlsbD0iIzE1MTUxNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIxMS4yODQ1MiwxMzQuNjU0MDhsMC41NjUxNywtMi41OTQ3OGwxLjIyODAxLC0xLjE0NTgybDEuMjE5OCwtMC45MDg0NGwxLjg5MDg1LDAuMzAzMTRsMi4yOTk4OCwyLjIxODY1bDAuOTAwMjIsMS40NTcxOGwtMS43NzY3NCwzLjI2NTg1bC0zLjMwNjk0LC0wLjU4OTgyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIwMS4xNTA2NiwxMzkuMTYwNjNjLTAuOTE3MTcsLTAuMzk4NDcgLTAuNTE4NywtMS4zMTU2NSAtMC41MTg3LC0xLjMxNTY1bDAuMjgxMzIsLTAuMzUwODVjLTAuMTA0MTQsLTEuMjkxMSAtMC4xNjIxNCwtMi4zMTk2MiAtMC44NjMwMSwtMy40MzA3N2MwLDAgLTAuNTE4MzgsLTAuODU1MTQgMC4zMzY3NiwtMS4zNzM1M2MwLjg1NTE0LC0wLjUxODM4IDEuMzczNTMsMC4zMzY3NiAxLjM3MzUzLDAuMzM2NzZjMC44MzE5MSwxLjQxMzMzIDEuMDEyNjEsMi42ODI1MiAxLjE0NjExLDQuMzA1MDlsLTAuNDQwMzUsMS4zMTAyNGMwLDAgLTAuMzk4NDcsMC45MTcxNyAtMS4zMTU2NSwwLjUxODd6IiBmaWxsPSIjNTRmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xOTYuMzc2NDksMTM4LjEyNDhjMCwxLjQ1ODI0IC0xLjQzNTgsMi42NDAzOCAtMy4yMDY5NCwyLjY0MDM4Yy0xLjc3MTE0LDAgLTMuMjA2OTQsLTEuMTgyMTQgLTMuMjA2OTQsLTIuNjQwMzhjMCwtMS40NTgyNCAxLjQzNTgsLTIuNjQwMzggMy4yMDY5NCwtMi42NDAzOGMxLjc3MTE0LDAgMy4yMDY5NCwxLjE4MjE0IDMuMjA2OTQsMi42NDAzOHoiIGZpbGw9IiM1NGZmMDAiIHN0cm9rZT0iIzU0ZmYwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=",
"Sprite1.svg",
"image"
);
var sampleCode = '<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="=6qWCv8dc.gx1,u}!t4J">sprite</variable><variable id="@/b9Q3%416WxKm==$-QF">aibo sprite</variable></variables><block type="variables_set" id="q%++%2!:{t:)Dn7;i;D3" x="170" y="110"><field name="VAR" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="VALUE"><block type="gvbvdxx_game_sprites_empty" id="J?AXJekjQL1GD7e_LjSS"></block></value><next><block type="variables_set" id=",t}W]qSk;=|Shhda$aVR"><field name="VAR" id="@/b9Q3%416WxKm==$-QF">aibo sprite</field><value name="VALUE"><block type="gvbvdxx_files_makeimage" id="tCDW[-WI#j[Ii:2b6idP"><value name="dataURI"><block type="gvbvdxx_files_dataurl" id="ZiNoI7N(dpgzc|CbdmdH"><field name="name">Sprite1.svg</field></block></value></block></value><next><block type="gvbvdxx_game_sprites_set_img" id="RbgJmPE2%5?Iv4)*m4x/"><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="image"><block type="variables_get" id="1Czt8VKRV,w!_+*.^(7q"><field name="VAR" id="@/b9Q3%416WxKm==$-QF">aibo sprite</field></block></value><next><block type="gvbvdxx_game_sprites_size" id="9#P*35GBf[vD57-HlEi}"><field name="NAME">width</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="pos"><block type="gvbvdxx_operators_number" id="MyB4#Z7U3?giF|C0@OC*"><field name="NAME">109</field></block></value><next><block type="gvbvdxx_game_sprites_size" id="8z,y/l2h%WnQ7YF){b_j"><field name="NAME">height</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="pos"><block type="gvbvdxx_operators_number" id="2{]c+TtO{qt?oY$%/d^p"><field name="NAME">108</field></block></value></block></next></block></next></block></next></block></next></block><block type="gvbvdxx_game_ontick" id="L`pt/h[o5gCkBlfNfmFW" x="170" y="390"><statement name="event"><block type="gvbvdxx_game_sprites_set_position" id="8z2@DfvOz}=Q0QaoUN%P"><field name="NAME">x</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><comment pinned="true" h="309" w="856">Hello There!\nOn the right side is the game area! Unlike scratch, to update the code, you must click start (reset the game).\nTo see the code in action, press "Start" on the game area on the top right.\nIf you want to stop the game, then press "Stop".\nIf you want to view the game in fullscreen press "Toggle Fullscreen".\nThis is an massive WIP things will change, and may break some games!\nWe will try our best to not break any games!\nAlso there is an ? mark for eatch comment on a block, if you click it it will hide the comment.\n\n\n- Gvbvdxx.</comment><value name="pos"><block type="gvbvdxx_operators_math" id="tle1xo`pk}$4^w}1i(^W"><field name="operator">+</field><value name="first"><block type="gvbvdxx_game_sprite_get" id="=)!t#z*s}C-E#2xGL1,w"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">x</field></block></value><value name="last"><block type="gvbvdxx_operators_math" id="k?USsN+tII;61QR/2Pn@"><field name="operator">/</field><value name="first"><block type="gvbvdxx_operators_math" id="@o`2{K*``QIS-i2v+irr"><field name="operator">-</field><value name="first"><block type="gvbvdxx_game_mouse_x" id="2pYYBhM=HPr$lNg!z^UO"></block></value><value name="last"><block type="gvbvdxx_game_sprite_get" id="F-i5T(:i5|%z|3cp%=X;"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">x</field></block></value></block></value><value name="last"><block type="gvbvdxx_operators_number" id="!vxqM}h5teU9e-g=E_3["><field name="NAME">3</field></block></value></block></value></block></value><next><block type="gvbvdxx_game_sprites_set_position" id="8z|(AZ|S(4IiS]CaE(9?"><field name="NAME">y</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="pos"><block type="gvbvdxx_operators_math" id="E^q3V;0YH+p6YOY0zjtq"><field name="operator">+</field><value name="first"><block type="gvbvdxx_game_sprite_get" id="d?DWPt00I65f[P^D0@zD"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">y</field></block></value><value name="last"><block type="gvbvdxx_operators_math" id="14+8k,$Y08i[VN~3=ly6"><field name="operator">/</field><value name="first"><block type="gvbvdxx_operators_math" id="=/r=g87$f6/klnXm|b*%"><field name="operator">-</field><value name="first"><block type="gvbvdxx_game_mouse_y" id=")^PT?lN0JDJ(Yu-ZV:i("></block></value><value name="last"><block type="gvbvdxx_game_sprite_get" id="{W*Y3:A]M^J[aY;SYh)$"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">y</field></block></value></block></value><value name="last"><block type="gvbvdxx_operators_number" id="410-~C$MUo;xnGLts*$j"><field name="NAME">3</field></block></value></block></value></block></value><next><block type="gvbvdxx_control_if_then_else" id="qls[U.ha)Mx%6jeR~O@{"><value name="if"><block type="gvbvdxx_operators_compare" id="pG:Qe4$1wDec!@_$0T9t"><field name="operator">&lt;</field><value name="1"><block type="gvbvdxx_operators_math" id="}Ftj[SNV%YhSVt5#joE_"><field name="operator">-</field><value name="first"><block type="gvbvdxx_game_mouse_x" id="`ukx-ppSVEde.obWEIc{"></block></value><value name="last"><block type="gvbvdxx_game_sprite_get" id="9^meIr]]|?#te:JXCsD@"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">x</field></block></value></block></value><value name="2"><block type="gvbvdxx_operators_number" id="?*;$TO~g^Q;9Xvr.@M$i"><field name="NAME">0</field></block></value></block></value><statement name="then"><block type="gvbvdxx_game_sprites_flip" id="|c?Xl5rqsS!QVBiTO]c("><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="NAME">none</field></block></statement><statement name="else"><block type="gvbvdxx_game_sprites_flip" id="~Gey^ub,9U7hm40P?UU5"><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="NAME">hor</field></block></statement></block></next></block></next></block></statement></block></xml>';
Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(sampleCode),workspace);
},70)