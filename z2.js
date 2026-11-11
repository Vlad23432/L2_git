function ipv4Parser(ip, mask){
  let network = [], host = [], Ip = [], Mask = [];
  Ip = ip.split('.');
  Mask = mask.split('.');
  for(let i = 0; i < 4; i++){
    network.push(+Ip[i] & +Mask[i]);
    host.push(+Ip[i] & ~+Mask[i]);
  }
  return [network.join('.'), host.join('.')];
}

console.log(ipv4Parser('192.168.50.129', '255.255.255.192'));