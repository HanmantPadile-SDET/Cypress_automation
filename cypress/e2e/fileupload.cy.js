import 'cypress-file-upload';
/// <reference types = "Cypress" />


describe('file upload', () => {
    it('single file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        //find the dropdown
        cy.get("#file-upload").attachFile('rrresume.docx')
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it('single file upload-Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        //find the dropdown
        cy.get("#file-upload").attachFile({filePath: 'rrresume.docx',fileName: 'myfile.docx'})
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('single file upload-Drag and drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        //find the dropdown
        cy.get("#drag-drop-upload").attachFile('rrresume.docx',{subjectType: 'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text','rrresume.docx')
       
    })

    it.only(' upload-multiple files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        //find the dropdown
        cy.get("#filesToUpload").attachFile(['rrresume.docx','resume123new.docx']);
        cy.wait(5000);
        cy.get('#fileList').should('have.length',2)
       
    })

    it(' upload-multiple files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        //find the dropdown
        cy.get("#filesToUpload").attachFile(['rrresume.docx','resume123new.docx']);
        cy.wait(5000);
        cy.get('#fileList').should('have.length',2)
       
    })

    it(' upload-shadow dom', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.php")
        //find the dropdown
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('rrresume.docx');
        cy.wait(5000);
        cy.get(".smart-item-name",{includeShadowDom:true}).contains('rrresume.docx')
       
    })
})