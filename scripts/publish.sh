pwd=${PWD}

for j in $(ls -d ./packages/*)
do
   echo "当前项目是 $j"
   i=$(echo $j | cut -d'/' -f 3)
   target="$pwd/packages/$i"
   echo "\033[1;41m 当前操作的是\033[0m: $i, $pwd, $target";
   cd $target &&
   npm version patch &&
   npm publish --access public
done