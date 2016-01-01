# My ES6 Node Starter Kit

Install:
```
mkdir project_dir && cd project_dir
wget -qO- -O tmp.zip https://github.com/nilshartmann/es6-node-starterkit/archive/master.zip && unzip tmp.zip && shopt -s dotglob && mv es6-node-starterkit-master/* . && rmdir es6-node-starterkit-master/ && rm tmp.zip
```

Replace project name:
```
find . -type f -exec sed -i '' s/es6\-node-starterkit/$(basename $PWD)/g {} \;
```
