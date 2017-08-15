function defineStructure() {

}

function onSync(lastSyncDate) {

}

function createDataset(fields, constraints, sortFields) {
	
	var prioridadesDatasetWilliam = DatasetBuilder.newDataset();
	
	prioridadesDatasetWilliam.addColumn("CODPRIORIDADE");
	prioridadesDatasetWilliam.addColumn("PRIORIDADE");
	
	prioridadesDatasetWilliam.addRow( new Array( "1", "BAIXA" ) );
	prioridadesDatasetWilliam.addRow( new Array( "2", "MÉDIA" ) );
	prioridadesDatasetWilliam.addRow( new Array( "3", "ALTA" ) );
	
	return prioridadesDatasetWilliam;
}

function onMobileSync(user) {

}