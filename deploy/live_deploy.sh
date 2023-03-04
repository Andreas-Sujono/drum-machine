# build in local and replace the new build files to the cloud server
# yarn
npm run build
scp  -i "/Users/andreas.sujuno/Desktop/FOLDER/personal/mainServerTest202.pem" -r $(pwd)/build ubuntu@ec2-18-136-102-171.ap-southeast-1.compute.amazonaws.com:/home/ubuntu/live/archieve/drum-machine