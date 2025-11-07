/**
 * Nattu Sakkarai - HTML Include System
 * Dynamically loads navbar and footer from separate HTML files
 * 
 * Usage: Add data-include attribute to any div
 * Example: <div data-include="templates/navbar.html"></div>
 */

(function() {
    'use strict';
    
    /**
     * Load HTML content from external file and insert into element
     */
    function includeHTML() {
        const elements = document.querySelectorAll('[data-include]');
        
        if (elements.length === 0) {
            console.log('No elements with data-include attribute found');
            return;
        }
        
        let loadedCount = 0;
        const totalElements = elements.length;
        
        elements.forEach(function(element) {
            const file = element.getAttribute('data-include');
            
            if (!file) {
                console.warn('Element has data-include attribute but no file specified', element);
                return;
            }
            
            // Fetch the HTML file
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    // Insert the loaded HTML into the element
                    element.innerHTML = data;
                    
                    // Remove the data-include attribute to prevent reloading
                    element.removeAttribute('data-include');
                    
                    loadedCount++;
                    
                    // Check if all includes are loaded
                    if (loadedCount === totalElements) {
                        // Trigger custom event when all includes are loaded
                        document.dispatchEvent(new Event('htmlIncludesLoaded'));
                        
                        // Re-initialize navigation active state after content is loaded
                        if (typeof setActiveNavLink === 'function') {
                            setActiveNavLink();
                        }
                        
                        console.log('All HTML includes loaded successfully');
                    }
                })
                .catch(error => {
                    console.error(`Error loading ${file}:`, error);
                    element.innerHTML = `<div class="alert alert-danger">Error loading component: ${file}</div>`;
                });
        });
    }
    
    // Load includes when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', includeHTML);
    } else {
        // DOMContentLoaded already fired
        includeHTML();
    }
    
    // Expose function globally for manual triggering if needed
    window.includeHTML = includeHTML;
    
})();
