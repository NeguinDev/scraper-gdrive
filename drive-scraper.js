const payload = "https://drive.google.com/file/d/1atCg3-Z4sBdLprNcWop_adE7T9Ss_obT/view?usp=sharing";

const driveScraper = (payload) => {
	const regex = /file\/d\/(.*)\//i;
	const match = payload.match(regex);
	const id = match[1];
	const url = `https://drive.google.com/uc?export=download&id=${id}`;
	return url;
}

console.log(driveScraper(payload));