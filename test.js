const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require(`./app.js`)

test(`one euro should be 1.07 dollars`, () => {
    let conversion = fromEuroToDollar(1)
    expect(conversion).toBe(1.07)
})

test(`the function fromEuroToDollar shouldn't return a Nan`, () => {
    let currency = fromEuroToDollar(4)
    expect(currency).not.toBe(NaN)
})

test(`one dollar should be 146.3 yen`, () => {
    let dollarToYen = fromDollarToYen(1);
    expect(dollarToYen).toBe(146.3)
})

test(`one yen should be 0.006 pounds`, () => {
    let yenToPound = fromYenToPound(1)
    expect(yenToPound).toBe(0.006)
})

test(`the function fromEuroToDollar, fromDollarToYen and fromYenToPound should return a number`, () => {
    let euroToDollar = fromEuroToDollar(1)
    let dollarToYen = fromDollarToYen(1)
    let yenToPound = fromYenToPound(1)
    expect(typeof euroToDollar).toBe("number")
    expect(typeof dollarToYen).toBe("number")
    expect(typeof yenToPound).toBe("number")
})

