# si 1 entonces muestra listo
# if [ $? -eq 1 ]; then echo "Bueno... ya salimos o terminamos pero con errores"; fi


install_dependencies () {

    echo ' '

    echo 'Rollup'
    pnpm i -D \
    rollup \

    echo ' '

    echo 'Typescript'
    pnpm i -D \
        tslib \
        @rollup/plugin-typescript 

    echo ' '

    echo 'swc'
    pnpm i -D \
        @swc/core \
        rollup-plugin-swc3 

    echo ' '
    
    echo 'react'
    pnpm i -D \
        react @types/react 

    echo ' '

    echo 'terser' 
    pnpm i -D \
        @rollup/plugin-terser

    # echo ' '

    # echo 'json' 
    # pnpm i -D \
    #     @rollup/plugin-json


    # echo ' '

    # echo 'node resolve' 
    # pnpm i -D \
    #     @rollup/plugin-sucrase \
    #     @rollup/plugin-node-resolve 


    pnpm i -D \
        rollup-plugin-dts-bundle-generator

    echo ' '
}


eto () {
    pnpm build
}


# echo "Eliminamos node modules"
# rm -rf node_modules
# echo "Listo"

# echo ' '

# echo "Instalamos dependencias"
# install_dependencies
# echo "Listo"

echo ' '

echo "Corremos el build"
eto

echo ' '

