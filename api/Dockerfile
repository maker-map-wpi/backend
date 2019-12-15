FROM python:3-alpine

RUN apk update

WORKDIR /usr/src/app

COPY bootstrap.sh requirements.txt ./

COPY test ./test

RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["/usr/src/app/bootstrap.sh"]
