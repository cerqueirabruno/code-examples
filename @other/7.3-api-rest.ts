/*

=====> MIGRATIONS EM JS # TS:
* uso de "export default", em vez de "export.default", no começo da lógica.
* o parâmetro queryInterface é tipado explicitamente.
* não é necessário usar o segundo parâmetro, Sequelize, pois será usada diretamente a importação
do objeto DataTypes.
* sequelize-cli não oferece a criação dos arquivos de migrations e seeders em TypeScript.
* indicado usar notação ex.: 01-..., 02-... (definem a ordem de execução).


=====> UTILITY TYPE:
são ferramentas que criam um tipo a partir de outro.

=====> CONTRATO:
quando tipamos os parâmetros de funções, nós obrigamos quem chama essas funções a passar
parâmetros de um jeito específico

*/