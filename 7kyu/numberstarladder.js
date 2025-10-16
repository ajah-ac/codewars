/*Using n as a parameter in the function pattern, where n > 0, complete the code to get the pattern:

1
1*2
1**3
1***4
... and so on...
Note: There is no newline in the end (after the pattern ends). */
function pattern(n) {
    const x = []
    for (let i = 1; i <= n; i++) {
        if (i === 1) x.push(`1`)
        else {
            const stars = '*'.repeat(i - 1)
            x.push(1 + stars + i)
        }
    }
    return x.join('\n')
}