const adventureGuild = (n, data) => {
    let groups = 0;
    let members = 0;
    data.sort();
    for (let i = 0; i < n; i++) {
        members++;
        if (members >= data[i]) {
            groups++;
            members = 0;
        }
    }
    return groups;
}

console.log(adventureGuild(5, [2, 3, 1, 2, 2]));