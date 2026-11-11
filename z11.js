function domainName(url){
    let regex = /(https?:\/\/)?(www\.)?/;
    return url.replace(regex, "").split(".")[0];
}

console.log(domainName("http://github.com/raygun"));
