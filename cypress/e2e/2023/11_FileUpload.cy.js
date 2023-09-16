//install cypress file upload package

describe('File upload scenarios',()=>{
    it('single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('rrresume.docx');
        cy.wait(2000);
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('have.text','File Uploaded!');

    })
    it('single file upload-rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'rrresume.docx',fileName:'myfile.docx'});
        cy.wait(2000);
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('have.text','File Uploaded!');

    })
    it('single file upload-drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('rrresume.docx',{subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text','rrresume.docx');
    })

    it('multiple file upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(["rrresume.docx","resume123new.docx"]);
        cy.wait(5000);
        cy.get('#fileList').should('have.length',2);

    })

    it('file upload-shadow dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.php");
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("rrresume.docx");
        cy.wait(5000);
        cy.get(".smart-item-name",{includeShadowDom:true}).contains('rrresume.docx');

    })


})