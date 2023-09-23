import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinks(key) {
    const myLinks = await AsyncStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;
}

export async function saveLinks(key, newLink) {
    let linksStoraged = await AsyncStorage.getItem(key)
    
    if (linksStoraged === null || linksStoraged === undefined) {
        linksStoraged = [];
    } else {
        linksStoraged = JSON.parse(linksStoraged);
    }

    //Verifica se pelo menos algum link salvo na lista ja possui id que está sendo registrado
    const hasLink = linksStoraged.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Este link já existe.')
        return
    } 

    linksStoraged.push(newLink)
    await AsyncStorage.setItem(key, JSON.stringify(linksStoraged));
    console.log('Link adicionado.')
    console.log(linksStoraged)
}

export async function deleteLinks(links, id) {
    let listLinks = links.filter( (item) => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('links', JSON.stringify(listLinks))

    return listLinks
}