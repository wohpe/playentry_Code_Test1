const { Extension, Block } = EntLib

const print_None = new Extension({
    displayName: '엔트리 콘솔 출력',
    blocks: {
        logToConsole: new Block({
            template: '[엔트리 콘솔에 하얀색 글씨 (text: Test) 출력하기]',
            action({ text }) {
               Entry.console.print(text)
            }
        }),
        logToConsole2: new Block({
            template: '[엔트리 콘솔에 파란색 글씨 (text: Test) 출력하기]',
            action({ text }) {
              Entry.console.print(text,"ask") // 질문
            }
        }),
        logToConsole3: new Block({
            template: '[엔트리 콘솔에 노란색 글씨 (text: Test) 출력하기]',
            action({ text }) {
              Entry.console.print(text,"speak")
            }
        }),
        logToConsole4: new Block({
            template: '[엔트리 콘솔 청소하기]',
            action({ text }) {
              
            }
        })
    }
})

// const extension2 = new Extension({
//     displayName: '확장블록2',
//     blocks: {
//         logToConsole2: new Block({
//             template: '[콘솔에 (text: Hello world!) 출력하기]',
//             action({ text }) {
//                 console.log(text)
//             }
//         })
//     }
// })

print_None.enable()
// extension2.enable()

Extension.allExtensionsLoaded() // Must call this when all extensions enabled
