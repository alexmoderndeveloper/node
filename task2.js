var MYAPP = (function () {
    return {
        hello: function () {
            var length = process.argv.length,
                summa = 0,
                j;
            if (length < 3) {
                return false;
            };
            for (j = 2; j < length; j++) {
                summa += Number(process.argv[j]);
            }
            return console.log(summa);
        }
    }
}());

MYAPP.hello();
