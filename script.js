// Register the layout extension
cytoscape.use(cytoscapeDagre);

document.addEventListener('DOMContentLoaded', function(){
    const cy = cytoscape({
        container: document.getElementById('cy'),
        
        elements: [
            /* ================= CORE ================= */
            { data: { id: 'cs11', label: 'CS 11\nIntro', type: 'core' }},
            { data: { id: 'cs15', label: 'CS 15\nData Structures', type: 'core' }},
            { data: { id: 'cs40', label: 'CS 40\nMachine', type: 'core' }},
            { data: { id: 'cs160', label: 'CS 160\nAlgorithms', type: 'core' }},
            { data: { id: 'cs105', label: 'CS 105\nLanguages', type: 'core' }},
            { data: { id: 'cs170', label: 'CS 170\nTheory', type: 'core' }},
            { data: { id: 'cs97', label: 'CS 97\nCapstone I', type: 'core' }},
            { data: { id: 'cs98', label: 'CS 98\nCapstone II', type: 'core' }},
            
            /* ================= MATH ================= */
            { data: { id: 'cs61', label: 'CS 61\nDiscrete', type: 'math' }},
            { data: { id: 'calc1', label: 'Calc I', type: 'math' }},
            { data: { id: 'calc2', label: 'Calc II', type: 'math' }},
            { data: { id: 'lin', label: 'Linear Algebra\n(Optional)', type: 'optional' }},
            
            /* ================= ELECTIVES ================= */
            { data: { id: 'cs111', label: 'CS 111\nOperating Systems', type: 'elect' }},
            { data: { id: 'cs118', label: 'CS 118\nCompilers', type: 'elect' }},
            { data: { id: 'cs121', label: 'CS 121\nDistributed Systems', type: 'elect' }},
            { data: { id: 'cs133', label: 'CS 133\nParallel Computing', type: 'elect' }},
            { data: { id: 'cs139', label: 'CS 139\nAdvanced Systems', type: 'elect' }},
            { data: { id: 'cs135', label: 'CS 135\nMachine Learning', type: 'elect' }},
            { data: { id: 'cs136', label: 'CS 136\nArtificial Intelligence', type: 'elect' }},
            { data: { id: 'cs138', label: 'CS 138\nData Science', type: 'elect' }},
            { data: { id: 'cs142', label: 'CS 142\nDeep Learning', type: 'elect' }},
            { data: { id: 'cs145', label: 'CS 145\nNLP', type: 'elect' }},
            { data: { id: 'cs131', label: 'CS 131\nTheory Seminar', type: 'elect' }},
            { data: { id: 'cs132', label: 'CS 132\nAdvanced Algorithms', type: 'elect' }},
            { data: { id: 'cs134', label: 'CS 134\nComputability', type: 'elect' }},
            { data: { id: 'cs140', label: 'CS 140\nComputer Graphics', type: 'elect' }},
            { data: { id: 'cs141', label: 'CS 141\nHCI', type: 'elect' }},
            { data: { id: 'cs143', label: 'CS 143\nVisualization', type: 'elect' }},
            { data: { id: 'cs116', label: 'CS 116\nNetworks', type: 'elect' }},
            { data: { id: 'cs150', label: 'CS 150\nCybersecurity', type: 'elect' }},
            { data: { id: 'cs151', label: 'CS 151\nCryptography', type: 'elect' }},

            /* ================= EDGES ================= */
            { data: { source: 'cs11', target: 'cs15' }},
            { data: { source: 'cs15', target: 'cs40' }},
            { data: { source: 'cs15', target: 'cs160' }},
            { data: { source: 'cs61', target: 'cs160' }},
            { data: { source: 'cs40', target: 'cs105' }},
            { data: { source: 'cs160', target: 'cs170' }},
            { data: { source: 'cs105', target: 'cs97' }},
            { data: { source: 'cs170', target: 'cs97' }},
            { data: { source: 'cs97', target: 'cs98' }},
            { data: { source: 'cs40', target: 'cs111' }},
            { data: { source: 'cs111', target: 'cs118' }},
            { data: { source: 'cs111', target: 'cs121' }},
            { data: { source: 'cs121', target: 'cs133' }},
            { data: { source: 'cs133', target: 'cs139' }},
            { data: { source: 'cs160', target: 'cs135' }},
            { data: { source: 'cs160', target: 'cs136' }},
            { data: { source: 'cs135', target: 'cs142' }},
            { data: { source: 'cs135', target: 'cs138' }},
            { data: { source: 'cs142', target: 'cs145' }},
            { data: { source: 'cs170', target: 'cs131' }},
            { data: { source: 'cs170', target: 'cs132' }},
            { data: { source: 'cs170', target: 'cs134' }},
            { data: { source: 'cs160', target: 'cs140' }},
            { data: { source: 'cs140', target: 'cs143' }},
            { data: { source: 'cs15', target: 'cs141' }},
            { data: { source: 'cs15', target: 'cs116' }},
            { data: { source: 'cs116', target: 'cs150' }},
            { data: { source: 'cs150', target: 'cs151' }}
        ],

        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(label)',
                    'text-wrap': 'wrap',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'color': '#fff',
                    'width': 100,
                    'height': 60,
                    'font-size': 10
                }
            },
            { selector: 'node[type="core"]', style: { 'background-color': '#3e8ede' }},
            { selector: 'node[type="math"]', style: { 'background-color': '#8b5a2b' }},
            { selector: 'node[type="elect"]', style: { 'background-color': '#a67c52' }},
            { selector: 'node[type="optional"]', style: { 'background-color': '#bbb' }},
            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    'opacity': 0.6
                }
            },
            {
                selector: '.hovered',
                style: {
                    'background-color': '#f4c542',
                    'color': '#000',
                    'border-width': 3,
                    'border-color': '#ff8c00'
                }
            },
            {
                selector: 'edge.hovered',
                style: {
                    'line-color': '#ff8c00',
                    'target-arrow-color': '#ff8c00',
                    'width': 4
                }
            },
            { selector: '.dimmed', style: { 'opacity': 0.15 } }
        ],

        layout: {
            name: 'dagre',
            rankDir: 'TB',
            nodeSep: 60,
            rankSep: 80
        }
    });

    const infoTitle = document.getElementById('course-title');
    const infoDesc = document.getElementById('course-desc');

    /* ================= INTERACTIONS ================= */

    // Hover effect for highlighting immediate connections
    cy.on('mouseover', 'node', e => {
        e.target.addClass('hovered');
        e.target.connectedEdges().addClass('hovered');
    });

    cy.on('mouseout', 'node', e => {
        if (!e.target.selected()) {
            e.target.removeClass('hovered');
            e.target.connectedEdges().removeClass('hovered');
        }
    });

    // Tap/Click to pin the path and show details in the panel
    cy.on('tap', 'node', e => {
        const node = e.target;
        
        // Update Side Panel text
        infoTitle.innerText = node.data('label').replace('\n', ' ');
        const pre = node.predecessors('node').length;
        const post = node.successors('node').length;
        infoDesc.innerHTML = `<strong>Prerequisites:</strong> ${pre} <br> <strong>Future Pathways:</strong> ${post}`;
        
        // Logical highlighting: Dim everything except the selected path
        const neighbors = node.successors().add(node.predecessors()).add(node);
        cy.elements().addClass('dimmed');
        neighbors.removeClass('dimmed');
        neighbors.edgesWith(neighbors).removeClass('dimmed').addClass('hovered');
    });

    // Reset view when clicking background
    cy.on('tap', e => { 
        if (e.target === cy) reset(); 
    });

    // Reset button functionality
    document.getElementById('reset-btn').addEventListener('click', reset);

    function reset() {
        cy.elements().removeClass('dimmed hovered');
        infoTitle.innerText = "Select a Course";
        infoDesc.innerText = "Click on any node to see its pathways.";
        cy.fit(); // Zoom to fit all elements
    }
});