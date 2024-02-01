// cant record lol my microphone cant hear from phone and cant upload audio files to teachable not everyone has one that picks up every noise in the world

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("'https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}