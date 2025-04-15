import  {describe, expect, it} from '@jest/globals';
import mockChallengeData from '../testing/mockChallengeData';
import Challenge from '../Challenge';
import TextFilter from './TextFilter';

describe('TextFilter', () => {
    describe('doesChallengeMatch()', () => {
        it('returns true when not searching', () => {
            const data = mockChallengeData();
            const filter = new TextFilter();
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(true);
        });

        it('returns true when title matches', () => {
            const data = mockChallengeData({ title:'Hacking' });
            const filter = new TextFilter('Hacking');
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(true);
        });

        it('returns false when nothing matches', () => {
            const data = mockChallengeData();
            const filter = new TextFilter('StringDont match');
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(false);
        });

        it('returns true when title matches partially', () => {
            const data = mockChallengeData({ title: 'Hacking' });
            const filter = new TextFilter('ack');
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(true);
        });

        it('returns true when title matches case insensetive', () => {
            const data = mockChallengeData({ title: 'Hacking'});
            const filter = new TextFilter('Ack');
            const result = filter.doesChallengeMatch(new Challenge(data));
            
            expect(result).toBe(true);
        });

        it('returns true description matches', () => {
           const data = mockChallengeData({ description: 'Lorem ipsum' });
           const filter = new TextFilter('Lorem');
           const result = filter.doesChallengeMatch(new Challenge(data));
           
           expect(result).toBe(true);
        });

        it('returns true description mathces, case sesetive', () => {
            const data = mockChallengeData({ description: 'Lorem ipsum'});
            const filter = new TextFilter('lorem');
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(true);
        });
    });
});