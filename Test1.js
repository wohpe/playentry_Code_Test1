const { Extension, Block } = EntLib

const print_None = new Extension({
    displayName: 'print_None',
    blocks: {
        logToConsole: new Block({
            template: '[엔트리 콘솔에 (text: Test) 출력하기]',
            action({ text }) {
               Entry.console.print(text)
            }
        })
    }
})

const print_ask = new Extension({
    displayName: 'print_ask',
    blocks: {
        logToConsole2: new Block({
            template: '[엔트리 콘솔에 (text: Test) 출력하기]',
            action({ text }) {
              Entry.console.print(text,"ask") // 질문
            }
        })
    }
})

const print_speak = new Extension({
    displayName: 'print_speak',
    blocks: {
        logToConsole3: new Block({
            template: '[엔트리 콘솔에 (text: Test) 출력하기]',
            action({ text }) {
              Entry.console.print(text,"speak")
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
print_ask.enable()
print_speak.enable()
// extension2.enable()

Extension.allExtensionsLoaded() // Must call this when all extensions enabled
