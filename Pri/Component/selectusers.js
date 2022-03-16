function SelectUser(id){
    const item = itens[id-1];
    setTitle(item.title)
    setId(item.id)
    setUserId(item.userId)
  }

export default SelectUser;