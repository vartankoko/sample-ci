var request = require('supertest');
var api = require('../index');


describe('contacts',function(){
  describe('GET /contacts',function(){
      it('should return the list of contacts',function(){
        return request(api)
          .get('/')
          .send()
          .expect('200');
        });
  });

  describe('POST /contacts/:name',function(){
        it('should return a new contact',function(){
          return request(api)
            .post('/contacts/foo')
            .send()
            .expect('200');
          });
  });

  describe('PUT /contacts/:name/new',function(){
        it('should be update contacts with the same name',function(){
          return request(api)
            .put('/contacts/foo/bar')
            .send()
            .expect('200');
          });
  });

  describe('DELETE /contacts/:name',function(){
        it('should remove contacts with the same name',function(){
          return request(api)
            .delete('/contacts/foo')
            .send()
            .expect('200');
          });
  });
});


/*
describe('api',function(){
    it('should return hello world on GET/',function(){
      return request(api)
        .get('/')
        .send()
        .expect('hello foobar');
      });
});*/
