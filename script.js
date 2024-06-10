        // Initialize Quill editor
        var quill = new Quill('#editor', {
            modules: {
                toolbar: '#toolbar'
            },
            theme: 'snow'
        });

        function saveAsPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.text(quill.getText(), 10, 10);
            doc.save('document.pdf');
        }

        function saveAsText() {
            const text = quill.getText();
            const blob = new Blob([text], { type: 'text/plain' });
            saveAs(blob, 'document.txt');
        }

        function saveAsHTML() {
            const html = quill.root.innerHTML;
            const blob = new Blob([html], { type: 'text/html' });
            saveAs(blob, 'document.html');
        }

        function saveAsDocx() {
            const text = quill.getText();
            const converted = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            saveAs(converted, 'document.docx');
        }