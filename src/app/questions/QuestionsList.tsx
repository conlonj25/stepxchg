import prisma from '@/lib/prisma';

const QuestionsList = async () => {
	const feed = await prisma.question.findMany();
	return (
		<>
			<h1>QuestionsList</h1>
			{feed.map((question) => (
				<>
					<h1>{question.title}</h1>
				</>
			))}
		</>
	);
};

export default QuestionsList;
