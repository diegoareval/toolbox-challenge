/**
 * Function that activates current page.
 * @param {Numbre} page Current page where it is positioned.
 * @param {Number} index Indice
 * @returns Boolean
 */
export function activePage(page,index){
    if (page === index) return true
    return   false;
}

/**
 * Function returns total number of pages.
 * @param {Number} total  Quantity of register
 * @param {Number} limit  Limit of register by pages
 * @returns Number
 */
export function calculatePages(total,limit){

    return   Math.ceil(total/limit);

}
