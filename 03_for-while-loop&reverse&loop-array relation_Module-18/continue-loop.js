var items = [78, 99, 37, 52, 89, 328, 28369, 87, 50, 40, 32, 7889,]

for (i = 0; i < items.length; i++) {
    var item = items[i];
    if (item < 100) {
        continue;
    }
    console.log(item);
}
// continue er kaj oi item k skip kora shudhu,,,