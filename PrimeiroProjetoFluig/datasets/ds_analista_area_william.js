function defineStructure() {

}
function onSync(lastSyncDate) {

}

function createDataset(fields, constraints, sortFields) {
	
	var dsAnalistas = DatasetBuilder.newDataset();
	
	dsAnalistas.addColumn("Nome");
	dsAnalistas.addColumn("Experiência");
	
	var filtro1 = DatasetFactory.createConstraint("tablename", "tb_analistas", "tb_analistas", ConstraintType.SHOULD);
	var filtro2 = DatasetFactory.createConstraint("metadata#id", "15", "15", ConstraintType.MUST);
	var filtro3 = DatasetFactory.createConstraint("metadata#version", "1000", "1000", ConstraintType.MUST);
	
	var constraints = new Array( filtro1, filtro2, filtro3 );
	
	dsForm = DatasetFactory.getDataset("ds_form_area_atendimento_william", null, constraints, null);
	
	for ( var i = 0; i < dsForm.rowsCount; i++ ){
		
		dsAnalistas.addRow( new Array(dsForm.getValue(i, "ANALISTA_AREA"), dsForm.getValue(i, "EXP_ANALISTA")));
		
	}
	
	return dsAnalistas;
}

function onMobileSync(user) {

}