var defaultThreads = [
    {
        id: 1,
        title: " Teste  Teste  Teste  Teste - Matheus",
        author: "Matheus",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Hugo",
                date: Date.now(),
                content: "First, abrindo uma thread"
            },
            {
                author: "Lucas",
                date: Date.now(),
                content: "Second"
            }
        ]
    },
    {
        id: 2,
        title: "Como se abre um thread? - Victor",
        author: "Victor",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Gabriel",
                date: Date.now(),
                content: "Sério? xD"
            },
            {
                author: "Douglas",
                date: Date.now(),
                content: "Não é possível"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}