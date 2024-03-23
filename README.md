# belajarGIT

Daftar tugas / branch
1. Tugas-Git
2. Tugas-Html
3. Tugas-ccs
4. Tugas-js
5. Tugas-midProject
6. Tugas-php
7. Tugas-finalProject

8. Daftar perintah GIT
9. 
User@DESKTOP-P56RRMB MINGW64 ~ (master)
$ cd Desktop

User@DESKTOP-P56RRMB MINGW64 ~/Desktop (master)
$ cd BelajarGIT

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main|MERGING)
$ git branch
  Tugas-git
  Tugas-html
* main

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main|MERGING)
$ git chackout main
git: 'chackout' is not a git command. See 'git --help'.

The most similar command is
        checkout

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main|MERGING)
$ git merge Tugas-git
fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main|MERGING)
$ git add Tugas-git.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main|MERGING)
$ git commit -m "menambahkan perubahan pada Tugas-git.txt"
[main 303d386] menambahkan perubahan pada Tugas-git.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git chackout main
git: 'chackout' is not a git command. See 'git --help'.

The most similar command is
        checkout

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git push origin main
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (9/9), 990 bytes | 123.00 KiB/s, done.
Total 9 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/jenetmariska/belajarGIT.git
   5b577e3..303d386  main -> main

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git branch Tugas-css

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git checkout Tugas-css
Switched to branch 'Tugas-css'

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-css)
$ touch Tugas-css.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-css)
$ git add Tugas-css.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-css)
$ git commit -m "menambahkan file Tugas-css.txt"
[Tugas-css 6330057] menambahkan file Tugas-css.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-css.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-css)
$ git add Tugas-css.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-css)
$ git commit -m "menambahkan perubahan pada Tugas-css.txt"
[Tugas-css a5101a7] menambahkan perubahan pada Tugas-css.txt
 1 file changed, 1 insertion(+)

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-css)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git merge Tugas-css
Updating 303d386..a5101a7
Fast-forward
 Tugas-css.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-css.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 592 bytes | 148.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/jenetmariska/belajarGIT.git
   303d386..a5101a7  main -> main

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$
User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git branch Tugas-js

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git checkout Tugas-js
Switched to branch 'Tugas-js'

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-js)
$ touch Tugas-js.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-js)
$ git add Tugas-js.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-js)
$ git commit -m "menambahkan file Tugas-js.txt"
[Tugas-js 991c235] menambahkan file Tugas-js.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-js.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-js)
$ git add Tugas-js.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-js)
$ git commit -m "menambahkan perubahan pada Tugas-js.txt"
[Tugas-js 3e21fa9] menambahkan perubahan pada Tugas-js.txt
 1 file changed, 1 insertion(+)

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-js)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git merge Tugas-js
Updating a5101a7..3e21fa9
Fast-forward
 Tugas-js.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-js.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git branch Tugas-php

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git checkout Tugas-php
Switched to branch 'Tugas-php'

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-php)
$ touch Tugas-php.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-php)
$ git add Tugas-php.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-php)
$ git commit -m "menabahkan file Tugas-php.txt"
[Tugas-php 02eeca2] menabahkan file Tugas-php.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-php.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-php)
$ git add Tugas-php.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-php)
$ git commit -m "menabahkan perubahan pada Tugas-php.txt"
[Tugas-php c4e3816] menabahkan perubahan pada Tugas-php.txt
 1 file changed, 1 insertion(+)

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-php)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git merge Tugas-php
Updating a03073a..c4e3816
Fast-forward
 Tugas-php.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-php.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 515 bytes | 128.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/jenetmariska/belajarGIT.git
   a03073a..c4e3816  main -> main

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git branch Tugas-midProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git checkout Tugas-midProject
Switched to branch 'Tugas-midProject'

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ touch Tugas-midProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ git add Tugas-midProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ git cimmit -m "menambahkan file Tugas-midProject.txt"
git: 'cimmit' is not a git command. See 'git --help'.

The most similar command is
        commit

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ git commit -m "menambahkan file Tugas-midProject.txt"
[Tugas-midProject ebc1faf] menambahkan file Tugas-midProject.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-midProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ git add Tugas-midProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ git commit -m "menambahkan perubahan pada Tugas-midProject.txt"
[Tugas-midProject a4b4f84] menambahkan perubahan pada Tugas-midProject.txt
 1 file changed, 1 insertion(+)

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-midProject)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git merge Tugas-midProject
Updating c4e3816..a4b4f84
Fast-forward
 Tugas-midProject | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-midProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 562 bytes | 140.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/jenetmariska/belajarGIT.git
   c4e3816..a4b4f84  main -> main

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git branch Tugas-finalProject

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git checkout Tugas-finalProject
Switched to branch 'Tugas-finalProject'

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-finalProject)
$ touch Tugas-finalProject.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-finalProject)
$ git add Tugas-finalProject.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-finalProject)
$ git commit -m "menambahkan file Tugas-finalProject.txt"
[Tugas-finalProject 81a80ca] menambahkan file Tugas-finalProject.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Tugas-finalProject.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-finalProject)
$ git add Tugas-finalProject.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-finalProject)
$ git commit -m "menambahkan perubahan pada Tugas-finalProject.txt"
[Tugas-finalProject 56b8948] menambahkan perubahan pada Tugas-finalProject.txt
 1 file changed, 1 insertion(+)

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (Tugas-finalProject)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git merge Tugas-finalProject
Updating a4b4f84..56b8948
Fast-forward
 Tugas-finalProject.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 Tugas-finalProject.txt

User@DESKTOP-P56RRMB MINGW64 ~/Desktop/BelajarGIT (main)
$ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 556 bytes | 139.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/jenetmariska/belajarGIT.git
   a4b4f84..56b8948  main -> main
