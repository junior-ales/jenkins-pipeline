'use strict';

var PipelineView = require('../../../app/views/components/pipelineView');
var moment = require('moment');

describe('Pipeline View', function() {
  it('should have pipeline title', function() {
    var pipeline = { name: 'pipeline name' };
    expect(PipelineView.render(pipeline)).toContain('pipeline name');
  });

  it('should have all jobs', function() {
    var pipeline = {
      jobs: [
        { name: 'job1' },
        { name: 'job2' },
        { name: 'job3' }
      ]
    };

    expect(PipelineView.render(pipeline)).toContain('job1');
    expect(PipelineView.render(pipeline)).toContain('job2');
    expect(PipelineView.render(pipeline)).toContain('job3');
  });

  it('should show the pipeline revision', function() {
    var pipeline = { revision: '444' };

    expect(PipelineView.render(pipeline)).toContain('#444');
  });

  describe('status', function() {
    it('should display how much time it took to run', function() {
      var TWO_MIN = 120000;
      var pipeline = { jobs: [{ duration: TWO_MIN }, { duration: TWO_MIN }] };

      expect(PipelineView.render(pipeline)).toContain('4min');
    });
  });
});
