import {
	type HttpRequest,
	type InvocationContext,
	app,
	input,
} from "@azure/functions";

interface TimeRegistration {
	partitionKey: string;
	// Add other properties as needed based on your table structure
}

const tableInput = input.table({
	tableName: "TimeRegistration",
	partitionKey: "EmployeeName",
	connection: "TableConnectionString",
});

app.http("getTimeRegistration", {
	methods: ["GET", "POST"],
	authLevel: "anonymous",
	extraInputs: [tableInput],

	handler: async (request: HttpRequest, context: InvocationContext) => {
		const { partitionKey } = (await request.json()) as { partitionKey: string };
		console.log("partitionKey: ", partitionKey);

		if (!partitionKey) {
			console.error("Error: partitionKey is required");
			return { status: 400, body: "partitionKey parameter is required" };
		}

		const rows = (await context.extraInputs.get(
			tableInput,
		)) as TimeRegistration[];
		console.log("Fetched time registrations:", rows);

		return { body: JSON.stringify(rows) };
	},
	// Note: The above code assumes that the table input is set up to fetch all rows for the given partition key.
});
