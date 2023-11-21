        // Get references to the text areas and the output iframe
        const htmlTextArea = document.getElementById("html-code");
        const cssTextArea = document.getElementById("css-code");
        const jsTextArea = document.getElementById("js-code");
        const outputIframe = document.getElementById("output");

        // Function to update the output iframe
        function updateOutput() {
            const htmlCode = htmlTextArea.value;
            const cssCode = `<style>${cssTextArea.value}</style>`;
            const jsCode = `<script>${jsTextArea.value}</script>`;

            const combinedCode = `
                <html>
                <head>${cssCode}</head>
                <body>${htmlCode}${jsCode}</body>
                </html>
            `;

            const outputDocument = outputIframe.contentDocument;
            outputDocument.open();
            outputDocument.write(combinedCode);
            outputDocument.close();
        }

        // Listen for changes in the text areas and update the output
        htmlTextArea.addEventListener("input", updateOutput);
        cssTextArea.addEventListener("input", updateOutput);
        jsTextArea.addEventListener("input", updateOutput);

        // Initial update
        updateOutput()