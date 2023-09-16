describe('web tables', () => {
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();
         //customers --> customers
        cy.get("#menu-customer>a").click();
        cy.get('#collapse-5 > :nth-child(1) > a').click();
    })

    it('check number of rows and coloumns',()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr").should('have.length',10)
        cy.get("table.table.table-bordered.table-hover>thead>tr>td").should('have.length',7)
    })

    it('data in particular cell',()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr:nth-child(4)>td:nth-child(3)").contains('gorankrezic90@gmail.com');

    })

    it('read all the rows',()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })


    it('handle the pagination',()=>{
        //get total pages
        // cy.get("div.col-sm-6.text-end").then((e)=>{
        //    let mytext=e.text();
        //    let totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
        //    cy.log("Total number of pages >>>>"+totalpages+">>>>>")

        // })

        //use 5 pages for example
        const totalpages=5;
        for(let p=1;p<=totalpages;p++){
            if(totalpages>1){
                cy.log("current active page==>"+p);
                cy.get("ul.pagination>li:nth-child("+p+")").click();
                cy.wait(3000);
                cy.get("table.table.table-bordered.table-hover>tbody>tr")
                .each(($row, index , $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((e)=>{
                            cy.log(e.text());
                        })
                    })
                })
            }
            

        }


    })



})