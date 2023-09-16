describe('Handling mouse actions',()=>{
    it('mouse actions',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.xpath("//a[contains(text(),'Mac (1)')]").should('not.be.visible')
        cy.get("#narbar-menu>ul>li:nth-child(1)").trigger('mouseover')
        cy.xpath("//a[contains(text(),'Mac (1)')]").should('be.visible')
    })

    it('right click',()=>{
        //approach 1
        // cy.visit(`https://swisnl.github.io/jQuery-contextMenu/demo.html`);
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        // cy.get(".context-menu-list.context-menu-root>li:nth-child(3)").should('be.visible');

        //approch 2
        cy.visit(`https://swisnl.github.io/jQuery-contextMenu/demo.html`);
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-list.context-menu-root>li:nth-child(3)").should('be.visible');

    })

    it('double click',()=>{
        cy.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_addeventlistener");
        cy.frameLoaded("#iframeresult");
        //approach 1
        cy.iframe("#iframeresult").find("button[onclick='myfunction()']").trigger('dblclick');
        cy.iframe("#iframeresult").find('#field2').should('have.value','Hello World!')

        //approach 2
        cy.iframe("#iframeresult").find("button[onclick='myfunction()']").dblclick();
        cy.iframe("#iframeresult").find('#field2').should('have.value','Hello World!')
    })  

    it('drag n drop',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").should('be.visible')
        cy.get("#box106").should('be.visible')
        cy.get("#box6").drag('#box106',{force:true})

    })
    it('scrolling page',()=>{
        cy.visit("https://www.topresume.com/")
        //scroll down
        cy.get("p.centered>a").scrollIntoView({duration:2000})

        cy.get("p.centered>a").should('be.visible')
        //scroll up
        cy.get("ul#main-nav>li.products").scrollIntoView({duration:2000})
        cy.get("ul#main-nav>li.products").should('be.visible')

    })


})