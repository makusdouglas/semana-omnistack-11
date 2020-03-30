<h1>Seja bem vindo ao Back-end da aplicação BE THE HERO</h1>
<p>Back-end desenvolvido utilizando <b>NODE.js</b> e o framework <b>express</b>.</p>
<h2>Principais alterações em relação ao projeto original</h2>
<h3>#1</h3>
<p>A principal diferença no back-end é a utilização da lib <b>Sucrase</b>, por meio dela é possivel mudar o import e export do node.</br>
Por padrão, o import e export vem da seguinte forma: </br>
<b>IMPORT :</b> <code>const example = require('./docs/example');</code> </br>
<b>EXPORT :</b> <code>module.exports = example;</code></br> </br>
Ao utilizar o sucrase, passamos a utilizar a seguinte sintaxe:</br>
<b>IMPORT :</b> <code>import example from'./docs/example';</code> </br>
<b>EXPORT :</b> <code>export default example;</code></br> </br>
Particularmente, prefiro essa maneira de importar e exportar, ja que ela é utilizada nas versões mais recente do ECMAScript (javascript), e nas outras ferramentas utilizadas neste projeto, tais como ReactJs e React Native.
</br>
</br>
</br>
<code>{</code></br>
<code> file: 'README.md',</code></br>
<code> version: 1.0</code></br>
<code>}</code>
</p>
