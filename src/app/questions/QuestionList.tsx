import QuestionPreview from './QuestionPreview';

const QuestionList = () => {
	return (
		<div className="flex flex-col gap-5 w-8/12">
			<QuestionPreview />
			<QuestionPreview />
			<QuestionPreview />
			<QuestionPreview />
		</div>
	);
};

export default QuestionList;
