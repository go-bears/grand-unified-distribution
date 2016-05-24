<script>
    var graph = new Springy.Graph();
    graph.addNodes(   
       "GUD",
       "General Beta",
       "Pearson",
       "General Beta Prime",
       "Beta",
       "Beta Exponential",
       "Beta Prime",
       "Prentice",
       "Pearson IV",
       "Unit Gamma",
       "Amoroso",
       "Burr",
       "Pearson II",
       "Power",
       "Gamma",
       "Gamma Exponential",
       "Inverse Gamma",
       "Log Logistic",
       "Weibull",
       "Sym Prentice",
       "Frechet",
       "Log Normal",
       "Exponential",
       "Laplace",
       "Normal",
       "Logistic",
       "Inverse Exponential",
       "Cauchy",
       "Gumball",
       "Pearson VII",
       "Uniform"
       );
       

    graph.addEdges(
      ['GUD', 'General Beta', {color: '#00A0B0', label: 'shape 4 -> 3'}],
      ['GUD', 'Pearson', {color: '#00A0B0'}],
      ['GUD', 'General Beta Prime', {color: '##00A0B0'}],
      
      ['General Beta', 'Beta', {color: '#6A4A3C', label: 'shape 3 -> 2'}],
      ['General Beta', 'Beta Exponential', {color: '#6A4A3C'}],
      ['General Beta', 'Unit Gamma', {color: '#6A4A3C'}],
      ['General Beta', 'Amoroso', {color: '#6A4A3C'}],
      ['General Beta', 'Beta Prime', {color: '#6A4A3C'}],
      ['Pearson', 'Beta', {color: '#6A4A3C'}],
      ['Pearson', 'Pearson IV', {color: '#6A4A3C'}],
      ['Pearson', 'Beta Prime', {color: '#6A4A3C'}],
      ['General Beta Prime', 'Beta Prime', {color: '#6A4A3C'}],
      ['General Beta Prime', 'Prentice', {color: '#6A4A3C'}],
      ['General Beta Prime', 'Amoroso', {color: '#6A4A3C'}],
      ['General Beta Prime', 'Burr', {color: '#6A4A3C'}],
      ['Beta', 'Pearson II', {color: '#EDC951', label: 'shape 2 -> 1'}],
      ['Beta', 'Gamma', {color: '#EDC951'}],
      ['Beta Exponential', 'Gamma Exponential', {color: '#EDC951'}],
      ['Beta Prime', 'Gamma', {color: '#EDC951'}],
      ['Beta Prime', 'Inverse Gamma', {color: '#EDC951'}],
      ['Prentice', 'Gamma Exponential', {color: '#EDC951'}],
      ['Prentice', 'Sym Prentice', {color: '#EDC951'}],
      ['Pearson IV', 'Inverse Gamma', {color: '#EDC951'}],
      ['Pearson IV', 'Pearson VII', {color: '#EDC951'}],
      ['Unit Gamma', 'Power', {color: '#EDC951'}],
      ['Unit Gamma', 'Gamma', {color: '#EDC951'}],
      ['Amoroso', 'Gamma', {color: '#EDC951'}],
      ['Amoroso', 'Gamma Exponential', {color: '#EDC951'}],
      ['Amoroso', 'Inverse Gamma', {color: '#EDC951'}],
      ['Amoroso', 'Log Normal', {color: '#EDC951'}],
      ['Amoroso', 'Weibull', {color: '#EDC951'}],
      ['Burr', 'Log Logistic', {color: '#EDC951'}],
      ['Burr', 'Frechet', {color: '#EDC951'}],

      ['Pearson II', 'Uniform', {color: '#CC333F',label: 'shape 1 -> 0'}],
      ['Pearson II', 'Normal', {color: '#CC333F'}],
      ['Power', 'Normal', {color: '#CC333F'}],
      ['Power', 'Exponential', {color: '#CC333F'}],
      ['Gamma', 'Exponential', {color: '#CC333F'}],
      ['Gamma Exponential', 'Gumball', {color: '#CC333F'}],
      ['Inverse Gamma', 'Normal', {color: '#CC333F'}],
      ['Inverse Gamma', 'Inverse Exponential', {color: '#CC333F'}],
      ['Log Logistic', 'Logistic', {color: '#CC333F'}],
      ['Log Normal', 'Normal', {color: '#CC333F'}],
      ['Pearson VII', 'Normal', {color: '#CC333F'}],
      ['Pearson VII', 'Cauchy', {color: '#CC333F'}],
      ['Weibull', 'Exponential', {color: '#CC333F'}],
      ['Weibull', 'Gumball', {color: '#CC333F'}],
      ['Sym Prentice', 'Laplace', {color: '#CC333F'}],
      ['Sym Prentice', 'Normal', {color: '#CC333F'}],
      ['Sym Prentice', 'Logistic', {color: '#CC333F'}],
      ['Frechet', 'Gumball', {color: '#CC333F'}],
      ['Frechet', 'Inverse Exponential', {color: '#CC333F'}]
      );

    jQuery(function(){
      var springy = jQuery('#distributions').springy({
        graph: graph
      });
    });
    
</script>