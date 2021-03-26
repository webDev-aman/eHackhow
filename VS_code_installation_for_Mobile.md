# Lets start

## Step 1:Install Ubuntu in Termux
Note (ubuntu in Command line format may neet 800-900mb Data)

a)```Install Termux in your phone:``` [Download Now](https://play.google.com/store/apps/details?id=com.termux)

b)```after installation run the following commands in termux``` 

>1) *apt-get update*
>2) *apt-get upgrade*



c) run the following command given here: 
>pkg install wget openssl-tool proot -y && hash -r && wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh && bash ubuntu.sh

after this run this command ```./start-ubuntu.sh```

d) ```Now you have CLI fo Ubuntu installed in Termux```


## Step 2:Install VS code in Ubuntu:

a) ```When you are in the Ubuntu terminal, you can run the following to grab the VS code editor for Free:```
 >wget https://github.com/cdr/code-server/releases/download/2.1698/code-server2.1698-vsc1.41.1-linux-arm64.tar.gz

b) ```Extract it with following command:```
 >tar -xvf ./code-server2.1698-vsc1.41.1-linux-arm64.tar.gz

```Voila, you have the editor extracted . Now you can optionally delete the archive to free up some space else your are going to use it later.```

 ```The files are no more in an executable format, they need to be placed in a /bin folder for you to have the ability to call it```

```Due to that, the following command should do the work :```
 >cp ./code-server2.1698-vsc1.41.1-linux-arm64/code-server /bin

 ```Voilà. You can now call the editor by running "code-server" any where in your terminal and you will be able to use it. It is served on localhost:8080.```

Final note: ``` Each time you launch it, you'll see a new password and it can be annoying. So let's set a password in our environment variables.
Run this :```
>export PASSWORD="<your_password>"

```Replace with any password of your choice and each time you launch the editor. You'll use the exact same password.```
