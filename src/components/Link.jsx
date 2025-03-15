const linkObj = {
    name: 'pinterest',
    url: 'https://ru.pinterest.com/search/pins/?q=troll%20face&rs=ac&len=4&source_id=6XhvPGRQ&eq=trol&etslf=16520'
};

const Link = () =>{
    return <a href={linkObj.url}>{linkObj.name}</a>
}

export default Link