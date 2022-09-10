or (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === search.toLowerCase()) {
            return i
        }
    }